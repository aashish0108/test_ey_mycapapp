namespace com.ey.school;
using {com.ey.reuse as reuse} from './reuse';
using {cuid,temporal, managed} from '@sap/cds/common';

context master{

    
    //creating our first db table - cds => Complie => Sql code
    // Actual table - com_ey_school_master_student
    //foreign key column name will be - class_id
    //aspect is added next to table with colon :
    entity student: reuse.Address{
        key id: String(32);
        name: String(80);
        class: Association to one class;
        age: Int16;
    }

    entity class {
        key id: String(32);
        className: String(80);
        teacher: String(80);
        semesters: Int16
    }

    entity books: cuid{
        bookName: localized String(32);
        author: String(80);
    }
}

context transaction{
    entity subs:cuid,temporal, managed{
        student: Association to master.student;
        book: Association to master.books;
    }
}