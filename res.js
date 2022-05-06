// Agar kode dijalankan dengan ketat
'use strict';

exports.ok = function(values, res) {
    var data = {
        'status':200,
        'values':values
    };

    res.send(data);
    res.end();
}