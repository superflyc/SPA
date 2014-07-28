"use strict";

var exerciseController = {

    getExercise: function (theExerciseID, theView, theDiv) {

        exerciseData.getExerciseData()
            .done(function (theData) {

                var filteredExercise = $.grep(theData.exercises, function (anExercise) {
                    return (anExercise.id === theExerciseID);
                });

                SPAService.render(filteredExercise, theView , theDiv);

            })
            .fail(function (jqXHR, status, error) {
                console.log(status + "-" + error);
            });

    },

    showExercises: function(theDiv) {

        $(theDiv).dataTable( {
            "ajax": spa.dataPath,
            "columns": [
                { "exercises": "name" },
                { "exercises": "reps" },
                { "exercises": "sets" }
            ]
        } );

    }




};