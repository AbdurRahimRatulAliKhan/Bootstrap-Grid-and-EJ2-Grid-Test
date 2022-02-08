(function () {
    var tableId, $tableEl;
    $(function () {
        tableId = "#tblList";
        initTable();
    });

    function initTable() {
        var gridOptions = {
            dataSource: ej2DataSource("/user-payments/list"),
            detailTemplate: '#detailtemplate',
            allowSorting: true,
            allowResizing: true,
            allowFiltering: true,
            allowPaging: true,
            allowExcelExport: true,
            toolbar: ['ExcelExport', { text: 'Refresh', tooltipText: 'Refresh Data', prefixIcon: 'e-icons e-refresh', id: 'tblRefresh' }],
            toolbarClick: function (args) {
                if (args.item.id === "tblRefresh") $tableEl.refresh();
            },
            filterSettings: { type: 'Menu' },
            pageSettings: { pageCount: 5, currentPage: 1, pageSize: 10, pageSizes: true },
            columns: [
                { field: 'Id', headerText: 'Id' },
                { field: 'CustomerId', headerText: 'Customer Id' },
                { field: 'TransactionType', headerText: 'Transaction Type', filter: { type: 'CheckBox' } },
                { field: 'TransactionStatus', headerText: 'Transaction Status', filter: { type: 'CheckBox' }, template: "#statusTemplate" },
                { field: 'TransactionId', headerText: 'Transaction Id' },
                { field: 'Currency', headerText: 'Currency' },
                { field: 'Amount', headerText: 'Amount', format: 'C2', textAlign: 'Right' },
                { field: 'ConversionRate', headerText: 'Conversion Rate' },
                { field: 'CreatedAt', headerText: 'Created At', type: 'dateTime', format: { type: 'dateTime', format: 'dd/MM/yyyy HH:mm' } }
            ],
            dataBound: function (e) {
                $tableEl.autoFitColumns();
            }
        };

        $tableEl = new ej.grids.Grid(gridOptions);
        $tableEl.appendTo(tableId);
    }
})();