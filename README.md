# Webpack + React + TypeScript Starter Template

🚀 **Стартовый шаблон** для быстрой настройки проекта на React с TypeScript, собранный с помощью Webpack.  
Оптимизирован для разработки и продакшена с поддержкой современных инструментов.

---

## ⚙️ **Технологии и инструменты**

### 📦 **Основной стек**

- **React 19** (с поддержкой Concurrent Mode)
- **TypeScript** (строгая типизация)
- **Webpack 5** (сборка с tree-shaking и code splitting)
- **SCSS** + **CSS Modules** (стилизация)

### 🔌 **Плагины и лоадеры Webpack**

- **`swc-loader`** – Компиляция JavaScript / TypeScript
- **`sass-loader`** + **`css-loader`** – работа с SCSS/CSS
- **`style-loader`** / **`MiniCssExtractPlugin`** – инлайнинг или извлечение CSS в отдельные файлы
- **`html-webpack-plugin`** – генерация HTML
- **`webpack-bundle-analyzer`** – визуализация бандла
- **`fork-ts-checker-webpack-plugin`** – проверка TypeScript в отдельном процессе

### 🛠 **Дополнительные инструменты**

- **ESLint** (линтер для JS/TS)
- **Prettier** (форматирование кода)
- **Husky** + **lint-staged** (pre-commit хуки)
- **Hot Module Replacement (HMR)** – горячая перезагрузка модулей

---

## 🚀 **Быстрый старт**

1. **Клонировать репозиторий:**

    ```bash
    git clone https://github.com/vldmr42/webpack-config-template.git
    cd webpack-config-template
    ```

2. **Установить зависимости:**

    ```bash
    npm install
    ```

3. **Запустить dev-сервер:**

    ```bash
    npm run start
    ```

4. **Собрать проект для продакшена:**
    ```bash
    npm run build:prod
    ```

---

💡 **Примечание:** Шаблон создан на основе [этого руководства](https://www.youtube.com/watch?v=acAH2_YT6bs).

---
