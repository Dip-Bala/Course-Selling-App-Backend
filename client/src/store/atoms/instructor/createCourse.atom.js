import {atom} from 'recoil'

export const createCourseAtom = atom({
    key: 'createCourse',
    default : {
        title : '',
        description : '',
        courseImg : '',
        price : 0,
        category: '',
        language : ''
    }
})