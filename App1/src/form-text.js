import React from "react";

export default function FormText(){
    const textPswd = React.useRef()
    const textPswd2 = React.useRef()

    const onBlurPassword=()=> {
        let pswd = textPswd.current.value
        if (pswd !== '' && !pswd.match(/^[0-9a-zA-Z]+$/)) {
        textPswd.current.value = ''
        alert('ต้องเป็น 0-9 หรือ a-z หรือ A-Z เท่านั้น')
        }
    }
    const onBlurPassword2 = () => {
        if (textPswd.current.value!== textPswd2.current.value) {
        textPswd2.current.value = ''
        alert('รหัสผ่านทั้งสองช่องไม่ตรงกัน')
            }
    }

return (
    <div className="mt-4 mx-auto p-3 rounded"
        style={{ width:'400px', background:'#cee'}}>
    <form>
        <div className="form-group mb-2">
            <label htmlFor="login">ชื่อผู้ใช้ (Login)</label>
            <input type="Text" id="login" name="login" maxLength="20"
                className="form-control form-control-sm"/>
        </div>
        <div className="form-group mb-2">
            <label htmlFor="pswd">รหัสผ่าน</label>
            <input type="password" id="pswd" name="pswd" maxLength="10"
                className="form-control form-control-sm"
                ref={textPswd} onBlur={onBlurPassword}/>
        </div>
        <div className="form-group mb-2">
            <label htmlFor="pswd2">ใส่รหัสผ่านซ้ำ</label>
            <input type="password" id="pswd2"
                className="form-control form-control-sm"
                ref={textPswd2} onBlur={onBlurPassword2}/>
        </div>
        <div className="form-group mb-4">
            <label htmlFor="memo">บันทึกช่วยจำ</label>
            <textarea id="memo" name="memo" rows="2"
                maxLength="200"
                className="form-control form-control-md">
            </textarea>
        </div>
        <div className="text-center">
            <button className="btn btn-sm px-4 btn-primary ">
                OK
            </button>
        </div>
    </form>
    </div>
    )
}

    