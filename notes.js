function notes(note) {
    let newNote;

    if (note >= 90 && note <= 100) {
        newNote = 'A'
    } else if(note >= 80 && note < 90){
        newNote = 'B'
    } else if(note >= 70 && note < 80){
        newNote = 'C'
    } else if(note >= 60 && note < 70){
        newNote = 'D'
    } else if(note >= 0 && note < 60){
        newNote = 'F'
    } else{
        return "A nota deve estar entre 0 e 100"
    }

    return newNote;
}

console.log(notes(101))