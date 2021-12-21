import Item from '../component/Item'

const List = () => {

  const obj = {
    name: 'Tomás',
    rol: 'estudiante'
  }


  return (
    <div>
      <Item elemento={obj} />
    </div>
  )
}

export default List