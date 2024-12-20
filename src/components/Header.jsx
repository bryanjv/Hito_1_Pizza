const Header = () => {
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <img 
        src="/img/Header.jpg" 
        alt="Fondo" 
        style={{ width: "100%", height: "auto" }} 
      />
      <h1 style={{ 
        position: "absolute", 
        top: "20%", 
        left: "50%", 
        transform: "translate(-50%, -50%)", 
        color: "white", 
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        padding: "10px" 
      }}>
        Pizzeria Mammmma Mia!
      </h1>
      <p style={{ 
        position: "absolute", 
        top: "30%", 
        left: "50%", 
        transform: "translate(-50%, -50%)", 
        color: "white", 
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        padding: "10px" 
      }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perferendis assumenda obcaecati animi doloribus eum quos, eligendi hic rerum tempore error voluptates reprehenderit fugiat quaerat saepe consectetur, iusto impedit quia.
      </p>
    </div>
  );
}

export default Header;
