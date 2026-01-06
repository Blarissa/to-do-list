import { Component, signal, PLATFORM_ID, inject, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Tag {
  name: string;
  color: string;
}

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
  tags: string[];
}

type FilterType = 'all' | 'active' | 'completed';

const STORAGE_KEY = 'todos';

const AVAILABLE_TAGS: readonly Tag[] = [
  { name: 'Trabalho', color: '#667eea' },
  { name: 'Pessoal', color: '#f59e0b' },
  { name: 'Urgente', color: '#ef4444' },
  { name: 'Estudo', color: '#10b981' },
  { name: 'Casa', color: '#8b5cf6' },
  { name: 'Saúde', color: '#ec4899' }
] as const;

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  // Signals de estado
  protected readonly title = signal('Lista de Tarefas');
  protected readonly newTodoText = signal('');
  protected readonly selectedTags = signal<string[]>([]);
  protected readonly todos = signal<Todo[]>([]);
  protected readonly filter = signal<FilterType>('all');
  protected readonly tagFilter = signal<string>('');

  // Constante de tags disponíveis
  protected readonly availableTags = AVAILABLE_TAGS;

  // Computed signals para melhor performance
  protected readonly filteredTodos = computed(() => {
    const filter = this.filter();
    const tagFilter = this.tagFilter();
    let todos = this.todos();

    // Filtro por status
    if (filter === 'active') {
      todos = todos.filter(todo => !todo.completed);
    } else if (filter === 'completed') {
      todos = todos.filter(todo => todo.completed);
    }

    // Filtro por tag
    if (tagFilter) {
      todos = todos.filter(todo => todo.tags?.includes(tagFilter));
    }

    return todos;
  });

  protected readonly activeCount = computed(() =>
    this.todos().filter(todo => !todo.completed).length
  );

  protected readonly completedCount = computed(() =>
    this.todos().filter(todo => todo.completed).length
  );

  private nextId = 1;

  constructor() {
    this.loadFromStorage();
  }

  // Métodos privados de persistência
  private loadFromStorage(): void {
    if (!this.isBrowser) return;

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return;

      const parsed: Todo[] = JSON.parse(saved);
      const todos = parsed.map(todo => ({
        ...todo,
        createdAt: new Date(todo.createdAt)
      }));

      this.todos.set(todos);
      this.nextId = Math.max(...todos.map(t => t.id), 0) + 1;
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
    }
  }

  private saveToStorage(): void {
    if (!this.isBrowser) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos()));
    } catch (error) {
      console.error('Erro ao salvar tarefas:', error);
    }
  }

  // Métodos públicos - Gerenciamento de tarefas
  protected addTodo(): void {
    const text = this.newTodoText().trim();
    if (!text) return;

    const newTodo: Todo = {
      id: this.nextId++,
      text,
      completed: false,
      createdAt: new Date(),
      tags: [...this.selectedTags()]
    };

    this.todos.update(todos => [...todos, newTodo]);
    this.resetForm();
    this.saveToStorage();
  }

  protected toggleTodo(id: number): void {
    this.todos.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    this.saveToStorage();
  }

  protected deleteTodo(id: number): void {
    this.todos.update(todos => todos.filter(todo => todo.id !== id));
    this.saveToStorage();
  }

  protected clearCompleted(): void {
    this.todos.update(todos => todos.filter(todo => !todo.completed));
    this.saveToStorage();
  }

  // Métodos públicos - Gerenciamento de tags
  protected toggleTag(tagName: string): void {
    this.selectedTags.update(tags =>
      tags.includes(tagName)
        ? tags.filter(t => t !== tagName)
        : [...tags, tagName]
    );
  }

  protected isTagSelected(tagName: string): boolean {
    return this.selectedTags().includes(tagName);
  }

  protected getTagColor(tagName: string): string {
    return this.availableTags.find(t => t.name === tagName)?.color ?? '#6b7280';
  }

  // Métodos públicos - Filtros
  protected setFilter(filter: FilterType): void {
    this.filter.set(filter);
  }

  protected setTagFilter(tagName: string): void {
    this.tagFilter.update(current => current === tagName ? '' : tagName);
  }

  // Métodos privados - Utilitários
  private resetForm(): void {
    this.newTodoText.set('');
    this.selectedTags.set([]);
  }


}
