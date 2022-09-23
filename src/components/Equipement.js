import React from 'react'

const Equipement = ({equipments}) => {
    console.log(equipments)
  return (
    <div>
        {equipments.map((equip,index) =>
            <ul style={{textDecoration:"none", lineHeight:'10px'}}><li key={index}>{equip}</li></ul>
        )}
    </div>
  )
}

export default Equipement