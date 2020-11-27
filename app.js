#!/usr/bin/env node
'use strict';

const { db } = require('./db');

/* 
imp:
    0) what is async await in node js?
    1) what is the behavior of the database?
    2) what is the behavior of the database?
*/

const testForMohsen = async () => {
    // how to put in the db
    await db.put('bday', 'sajad --> 1379/01/04');

    // how to get in the db
    await db.get('bday').then((data) => {
        console.log(data.toString());
    });
};

testForMohsen();
