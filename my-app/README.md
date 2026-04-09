# 📋 Task Manager

Приложение для управления задачами с фильтрацией и сохранением в localStorage.

## 🚀 Технологии

- React 18
- TypeScript
- Zustand (управление состоянием)
- SCSS Modules (стилизация)

## 📦 Установка

```bash
# Клонируйте репозиторий
git clone <your-repo-url>

# Перейдите в папку проекта
cd task-manager

# Установите зависимости
npm install

# Запустите проект
npm run dev

# структура проекта:
src/
├── components/
│   ├── LeftSide/           # Форма создания задач
│   │   ├── LeftSide.tsx
│   │   ├── LeftSide.module.scss
│   │   └── ui/
│   │       └── Field.tsx   # Поле ввода
│   │
│   ├── RightSide/          # Список задач и фильтры
│   │   ├── RightSide.tsx
│   │   ├── RightSide.module.scss
│   │   ├── constants.js    # Данные для фильтров
│   │   ├── ui/
│   │   │   └── Filter.tsx  # Кнопки фильтрации
│   │   └── ListTasks/
│   │       ├── ListTasks.tsx
│   │       ├── ListTasks.module.scss
│   │       └── Task/
│   │           ├── Task.tsx
│   │           ├── Task.module.scss
│   │           └── ui/
│   │               └── Button.tsx  # Кнопка удаления
│   │
│   └── Header/             # Шапка приложения
│       ├── Header.tsx
│       └── Header.module.scss
│
├── store/
│   └── store.ts            # Zustand store (persist + immer)
│
├── types/
│   └── index.ts            # TypeScript типы
│
├── App.tsx                 # Главный компонент
├── App.module.scss
├── main.tsx
└── index.css