/* login action module */

function Dashboard(templateItem) {

    var self = this;
    this.demoData = [];
    this.table = $(".table-responsive");
    this.rootParent = templateItem;
    this.userTable = null;
    this.addBtn = $(templateItem).find('#add_btn');

    this.showModal = function(data) {
        self.CommonWidget.showPopup('popupContact');
        self.loadData(data);
    }
    this.deleteItem = function(index) {
        //this.demoData.splice(index, 1);
        self.userTable.row('.selected').remove().draw(false);
    }
    this.createUser = function() {
        // this.demoData.splice(index, 1);
        self.userTable.row.add([
            '<a href="#" class="link">' + $("#popupContact").find('input[name^="age"]').val() + '</a>',
            $("#popupContact").find('input[name^="age"]').val(),
            $("#popupContact").find('input[name^="gender"]').val(),
            $("#popupContact").find('input[name^="designation"]').val(),
            $("#popupContact").find('input[name^="name"]').val(),
            '<a href="#" class="delete">Delete</a>',
            $("#popupContact").find('input[name^="name"]').val()
        ]).draw(false);
        self.CommonWidget.hidePopup('popupContact');
    }
    this.loadData = function(index) {
            if (index !== null) {
                var selectedUser = [];
                selectedUser = this.demoData[index];
                $("#popupContact").find('input[name^="name"]').val(selectedUser[5]);
                $("#popupContact").find('input[name^="age"]').val(selectedUser[1]);
                $("#popupContact").find('input[name^="gender"]').val(selectedUser[2]);
                $("#popupContact").find('input[name^="designation"]').val(selectedUser[3]);
            } else {

            }
        }
        /* Initialize the datatable */
    this.initDataTable = function(response) {
        for (i = 0; i < response.length; i++) {
            var item = response[i];
            //var result = $.grep(myArray, function(e){ return e.id == id; });
            this.demoData[i] = new Array('<a href="#" class="link">' + item.name + '</a>', item.age, item.gender, item.position, '<a href="#" class="delete">Delete</a>', item.name);
        }
    }

    this.init = function() {
        // var mydata = JSON.parse(data);
        self.bind();
        $.getJSON("assets/json/data.json", function(userData) {
            self.initDataTable(userData);
            $('.table-responsive').html('');
            $('.table-responsive').html('<table class="display userTable" id="users"></table>');

            self.userTable = $('#users').DataTable({
                "data": self.demoData,
                "bFilter": false,
                "paging": false,
                "bSort": false,
                "columns": [{
                    "title": "Name"
                }, {
                    "title": "Age"
                }, {
                    "title": "Gender"
                }, {
                    "title": "Designation",
                    "class": "center"
                }, {
                    "title": "Delete",
                    "class": "center"
                }, ]
            });
            self.bindTableEvents();
        });
    };

    this.bindTableEvents = function() {
        $('#users tbody').on('click', 'tr', function() {
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            } else {
                self.userTable.$('tr.selected').removeClass('selected');
                $(this).addClass('selected');
            }
        });
        this.table.find('.link').on('click', function() {
            self.showModal($(this).index('.link'));
        });
        this.table.find('.delete').on('click', function() {
            self.deleteItem($(this).index('.delete'));
        });
        $("#popupContact").find('#submit').on('click', function() {
            self.createUser();
        });
        $("#popupContact").find('.close').on('click', function() {
            self.CommonWidget.hidePopup('popupContact');
        });
    };

    this.bind = function() {
        self.CommonWidget = new CommonWidget(self.rootParent);
        this.addBtn.on('click', function() {
            self.showModal(null);
        });
    };

    this.init();
}