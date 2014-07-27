"use strict";

var exerciseController = {

    getExercise: function (theExerciseID) {

        exerciseData.getExerciseData()
            .done(function (theData) {

                var filteredExercise = $.grep(theData.exercises, function (anExercise) {
                    return (anExercise.id === theExerciseID);
                });

                SPAService.render(filteredExercise, "exerciseDetail.html", "#content");

            })
            .fail(function (jqXHR, status, error) {
                console.log(status + "-" + error);
            });

    },


};