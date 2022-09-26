import React from 'react'

const Equipement = ({equipments}) => {
  return (
    <div>
        {equipments.map((equip,index) =>
            <ul key={index} style={{textDecoration:"none", lineHeight:'10px',fontFamily: "Montserrat"}}><li key={index}>{equip}</li></ul>
        )}
    </div>
  )
}

export default Equipement