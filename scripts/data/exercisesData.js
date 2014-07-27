"use strict";
var exerciseData = {

    getExerciseData: function() {

        return $.ajax(
            {
                url: spa.dataPath
            }
        );
    }

};
