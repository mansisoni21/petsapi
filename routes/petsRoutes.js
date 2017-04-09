/**
 * Created by mansi soni on 4/7/2017.
 */
module.exports = function(app) {
    var petsList = require('../controllers/petsController');


    // todoList Routes
    app.route('/pets')
        .get(petsList.list_all_pets)
        .post(petsList.create_a_pet);

    app.route('/pets/:Id')
    app.route('/pets/:Id')
        .get(petsList.read_a_pet)
        .put(petsList.update_a_pet)
        .delete(petsList.delete_a_pet);
};