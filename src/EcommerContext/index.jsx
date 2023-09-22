const EcommerContext = React.createContext();

const EcommerProviner = ({ children }) => {
  // Tu lógica del contexto aquí (ejemplo: estado del carrito, funciones, etc.)

  return (
    <EcommerContext.Provider value={/* tu valor del contexto aquí */}>
      {children}
    </EcommerContext.Provider>
  );
};

export { EcommerContext, EcommerProviner };