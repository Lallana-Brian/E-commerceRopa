import "./DarkModeToggle.css"; // Importamos el archivo CSS para estilizar el botón de cambio de tema.

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    // Botón que al hacer clic ejecuta la función `toggleTheme`, alternando entre modo oscuro y claro.
    <button className="theme-toggle" onClick={toggleTheme}>
      {/* Aquí se cambia dinámicamente el texto del botón dependiendo de si el tema actual es oscuro o claro */}
      {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
};

export default ThemeToggle;
