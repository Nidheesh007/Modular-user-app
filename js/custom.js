		         	$(document).ready(function() {

		         		$('.merchantList').html( '<table class="table table-bordered table-striped mg-t datatable merchantTable" id="merchantTable"></table>' );
		        	
		            $('#merchantTable').dataTable( {
		                "data": merchantData,
		                "bFilter": false,
		                "paging": false,
		                "columns": [
		                    { "title": "", "width": "4%" },        
		                    { "title": "Name" },
		                    { "title": "Created Date", "class": "center" },
		                    { "title": "Last Edited", "class": "center" },
		                    { "title": "Status","class": "center" }
		                ], 
		                "aoColumnDefs": [
		                                 {
		                                     bSortable: false,
		                                     aTargets: [ 0 ]
		                                  }
		                                ],
		                "aaSorting": []
		            } );

});
	         	