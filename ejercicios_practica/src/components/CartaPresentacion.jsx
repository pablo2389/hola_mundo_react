




function CartaPresentacion() {
  
  const nombre = 'pablo';
  const habilidades = ['React', 'JavaScript', 'CSS', 'HTML'];
  const aspiraciones = 'Convertirme en un desarrollador web ';

  return (
    <div className="carta-presentacion">
      <h2>mi carta de presentacion</h2>
      <p>¡Hola! Soy {nombre} y estoy trabajando en proyectos web.</p>
      <p>Algunas de mis habilidades incluyen: {habilidades.join(', ')}</p>
      <p>Mi mayor aspiración es {aspiraciones}.</p>
    </div>
  );
}

export default CartaPresentacion;
