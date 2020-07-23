let group = {
    title : "JS",
    students:["Prince","Momani"],
    showList(){
        this.students.forEach(
            function(student){ 
                 console.log(this.title + ':' + student)
        }
        )
    }
}

group.showList();