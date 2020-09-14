
function renderStudents(students) {
    let htmlString = '';

    for (let i =0; i < students.length; i++) {
        const student = students[i];
        let statusHtml = ''

        if (student.isPresent) {
            statusHtml = '<p>Present</p>'
        } else {
            statusHtml = '<p>Absent</p>'
        }

        htmlString += `
            <div class="text-center border rounded shadow mx-3 my-2 ${student.isPresent ? 'bg-success' : 'bg-danger'}" style="width: 300px;">
                <h3>${student.name}</h3>
                ${statusHtml}
            </div>
        `
    }

    return `
        <div class="d-flex flex-wrap justify-content-center mt-5">
            ${htmlString}
        </div>
    `
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}