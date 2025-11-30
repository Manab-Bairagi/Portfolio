# macOS Style Portfolio

A highly interactive, macOS-inspired portfolio website built with React, Vite, and TailwindCSS. This project mimics the look and feel of the macOS desktop environment, featuring a functional dock, draggable windows, and various applications to showcase my skills and projects.

## 🚀 Features

-   **Desktop Environment**: A realistic desktop interface with a wallpaper and a top navigation bar.
-   **Interactive Dock**: A macOS-style dock with magnification effects and tooltips, allowing users to launch applications.
-   **Window Management**:
    -   **Draggable Windows**: All application windows can be dragged around the desktop.
    -   **Minimize/Maximize/Close**: Functional window controls.
    -   **Z-Index Management**: Clicking a window brings it to the front.
-   **Applications**:
    -   **Finder**: Navigate through folders and files to explore projects and "About Me" content. Supports opening text and image files.
    -   **Safari**: A browser-like interface showcasing project case studies with external links (GitHub, Live Demo, Presentations).
    -   **Terminal**: Displays technical skills in a command-line interface style.
    -   **Resume**: A PDF viewer to display and download my resume.
    -   **Photos**: A gallery application to view photos with a sidebar and grid layout.
    -   **Contact**: A simple contact card with social links.
    -   **Trash**: Linked to the Finder's Trash folder.
-   **File System Simulation**: A simulated file system structure managed by a global store, allowing navigation through directories.

## 🛠️ Tech Stack

-   **Frontend Framework**: [React](https://reactjs.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [TailwindCSS](https://tailwindcss.com/)
-   **Animations**: [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform) for smooth window dragging and dock animations.
-   **State Management**: [Zustand](https://github.com/pmndrs/zustand) for managing window states (open/close, z-index) and Finder location.
-   **PDF Rendering**: [React-PDF](https://github.com/wojtekmaj/react-pdf) for the Resume viewer.
-   **Icons**: [Lucide React](https://lucide.dev/) and custom SVG/PNG assets.

## 📦 Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Manab-Bairagi/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Build for production:**

    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/       # Reusable components (Dock, Navbar, WindowsControls, etc.)
├── constants/        # Configuration data (apps, file system structure, content)
├── hoc/              # Higher-Order Components (WindowWrapper for drag/resize logic)
├── store/            # Zustand stores (Windows.js, location.js)
├── Windows/          # Application window components (Finder, Safari, Terminal, etc.)
├── App.jsx           # Main application entry point
└── index.css         # Global styles and Tailwind directives
```

## 🎨 Customization

You can customize the content by editing the files in `src/constants/index.js`. This file contains the configuration for:
-   **Dock Apps**: List of applications in the dock.
-   **File System**: The folder and file structure used by Finder.
-   **Project Data**: Content for the Safari showcase.
-   **Tech Stack**: Skills displayed in the Terminal.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
