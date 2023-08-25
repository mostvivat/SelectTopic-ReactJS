import React from 'react'

export default function RefsArray() {
    const table = React.useRef()
    const tr = React.useRef([])

    const data = [
        ['JavaScript', 100],
        ['React', 150],
        ['React Native', 180],
        ['Node.js', 200],
        ['VS Code', 120]
    ]
    const onClickButton = (i) => {
//การลบแถวออกจากตาราง จะท าให้ล าดับแถวเปลี่ยนไปจากเดิม
//ซึ่งอาจไม่ตรงกับล าดับอ้างอิงของแถวนั้นที่ได้ก าหนดไว้ล่วงหน้า
//ดังนั้น เราต้องตรวจสอบล าดับที่แท้จริงอีกครั้ง เพื่อใช้ในการลบ
const index = tr.current[i].rowIndex
table.current.deleteRow(index)
}
const onMouseOverRow = (i) => {
    tr.current[i].style.backgroundColor = 'yellow'
    }
    const onMouseOutRow = (i) => {
    tr.current[i].style.backgroundColor = 'white'
    }
    const tableStyles = { margin: 'auto', marginTop: 30 }
    return (
    <table ref={table} border="1" cellPadding={5} style={tableStyles} >
    <tr><th>Product</th><th>Price</th><th>Delete</th></tr>
    {data.map((item, i) => {
return (
<tr ref={el => tr.current[i] = el}
onMouseOver={() => onMouseOverRow(i)}
onMouseOut={() => onMouseOutRow(i)}
>
<td>{item[0]}</td>
<td>{item[1]}</td>
<td><button onClick={() => onClickButton(i)}>
Delete</button></td>
</tr>
)
})
}
</table>
)
}
    