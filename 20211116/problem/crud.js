function MyStudent(name, age, number) {
    this.name = name
    this.age = age
    this.number = number
    this.regist = function () {
        alert(this.name + "학생 등록 완료")
    }
}

window.onload = function () {
    //head태그쪽에 적어도 body에 있는 내용들이 다 불러와 진 뒤에 적는거라 에러없음
    let my_name = document.querySelector("#name")
    let my_age = document.querySelector("#age")
    let my_num = document.querySelector("#num")

    let my_create = document.querySelector("#create")
    let my_read = document.querySelector("#read")
    let my_update = document.querySelector("#update")
    let my_delete = document.querySelector("#delete")
    let consolelog = document.querySelector("#consolelog")

    let students = []
    my_create.onclick = function () {
        for (let item of students) {
            if (item.number == my_num.value) {
                alert("중복 학생 존재")
                return
            }
        }
        let tempStudent = new MyStudent(my_name.value, my_age.value, my_num.value)
        students.push(tempStudent)
        tempStudent.regist()
        console.log(students)
    }
    my_read.onclick = function () {
        for (let item of students) {
            if (my_num.value == item.number) {
                alert(`${item.number}번 학생은 ${item.name}이며, ${item.age}살이다.`)
                return
            }
        }
    }
    my_update.onclick = function () {
        for (let item of students) {
            if (my_num.value == item.number) {
                item.name = my_name.value
                item.age = my_age.value
            }
        }
    }
    my_delete.onclick = function () {
        for (let i = 0; i < students.length; i++) {
            if (my_num.value == students[i].number)
                students.splice(i, 1)
        }
    }
    consolelog.onclick = function () {
        console.log(students)
    }
}