import React from 'react'

export default function FormCheck() {
 const switchReq = React.useRef() //ค่าอ้างอิงสำหรับ switch
 const styles = ['bold', 'italic', 'underline']
 const sizes = ['small', 'medium', 'large', 'larger']
 let checkedStyles = [] //เก็บค่าของ checkbok ที่ถูกเลือก
 let checkedSize = '' //เก็บค่าของ radio ที่ถูกเลือก

 const onChangeCheck=(event)=> { //ส าหรับจัดการอีเวนต์ของ checkbox
 let checked = event.target.checked //checkbox นั้นถูกเลือกหรือไม่
 let value = event.target.value //ค่าของ checkbox นั้น
 let idx = checkedStyles.indexOf(value)
    if (checked && idx === -1) { //ถ้ายังไม่มีค่านั้นอยู่ก่อน ให้เพิ่มลงในอาร์เรย์
        checkedStyles.push(value) //ที่ใช้เก็บรายการที่ถูกเลือก
    }else {
        checkedStyles.splice(idx, 1) //ถ้าไม่เลือกให้ลบออกจากอาร์เรย์
    }
 }
    //ส าหรับจัดการอีเวนต์ของ radio ถ้าเกิดกับรายการใด รายการนั้นจะมีสถานะเป็น on
    //จึงเอาค่าไปเก็บแทนค่าเดิมได้เลย เพราะ radio เลือกได้เพียงรายการเดียว
 const onChangeRadio = (event) => {
    checkedSize = event.target.value
 }
//เมื่อคลิกปุ่ม OK ถ้า switch เป็น on ให้ตรวจสอบว่า
 //เลือกรายการครบทุกกลุ่มหรือไม่
 const onClickButton =()=> {
    if (switchReq.current.checked) {
    if (checkedStyles.length === 0) {
        alert('Please select style')
        return
    } else if (checkedSize === '') {
        alert('Please select size')
        return 
    }
 }
    let msg = 'selected style(s): ' + checkedStyles.join(', ')
    msg += '\nselected size: ' + checkedSize
    alert(msg)
 }
 return (
    <div className="mt-4 mx-auto p-3 rounded"
    style={{ width:'450px', background:'#cee'}}>
    <form>
        <span>font style:</span>&nbsp;&nbsp;
        {
        styles.map((st, i) => {
            return (
            <div className="form-check form-check-inline mb-2">
                <input type="checkbox" id={'check'+i} value={st}
                    className="form-check-input" onChange={onChangeCheck}/>
                <label htmlFor={'check'+i} className="form-check-label">{st}</label>
            </div>
            )
        })
        }
        <br/>
        <span>font size:</span>&nbsp;&nbsp;
        {
            sizes.map((sz, i) => {
                return (
                <div className="form-check form-check-inline mb-2">
                    <input type="radio" id={'radio'+i} name="fontSize" value={sz}
                        className="form-check-input" onChange={onChangeRadio}/>
                    <label htmlFor={'radio'+i} className="form-check-label">{sz}</label>
                </div>
                )
            })
        }
        <div className="form-check form-switch mt-3">
            <input type="checkbox" id="sw" value="require"
                className="form-check-input" ref={switchReq}/>
            <label htmlFor="sw" className="form-check-label">require</label>
        </div>
            
        <div className="text-center mt-4">
            <button type="button" className="btn btn-sm px-4 btn-primary"
                onClick={onClickButton}>OK
            </button>
        </div>
    </form>
    </div>
)
}
