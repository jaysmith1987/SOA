app.controller('tableCtrl', ['$scope', '$http', 'tableData',
    function($scope, $http, tableData){
        $scope.tables = [];
        $scope.opened = false;
        $scope.up = false;
        $scope.target = false;
        $scope.origin = false;
        $scope.md = false;
        $scope.ms = false;
        $scope.lists = [];

    
         
        tableData.getStandardData().then(function(data){
            $scope.tables = data;
        })
        
            $scope.orderByMe = function(x){
            $scope.myOrderBy = x;
            if($scope.myOrderBy === 'conversationID') {
                $scope.opened = true;
            } else {
                $scope.opened = false;
            }
            if($scope.myOrderBy === 'sender') {
                $scope.up = true;
            } else {
                $scope.up = false;
            }
            if($scope.myOrderBy === 'target') {
                $scope.target = true;
            } else {
                $scope.target = false;
            }
            if($scope.myOrderBy === 'origin'){
                $scope.origin = true;
            } else {
                $scope.origin = false;
            }
            if($scope.myOrderBy === 'messageDate'){
                $scope.md = true;
            } else {
                $scope.md = false;
            }
            if($scope.myOrderBy === 'messageState'){
                $scope.ms = true;
            } else {
                $scope.ms = false;
            }
        }
       
        $scope.error = true;

        $scope.getValue = function(valconversationID, valerrorInfoerrorReason, valerrorInfoerrorDetail, valerrorInforetryStatus){
            $scope.convoId = valconversationID; 
            $scope.errorReason = valerrorInfoerrorReason;
            $scope.errorDetail = valerrorInfoerrorDetail;
            $scope.retryStatus = valerrorInforetryStatus;
        }

        $scope.close = function(){
            $scope.errorReason = false;
        }
        
         $scope.today = function() {
    $scope.startDate = new Date();
    $scope.endDate = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.startDate = null;
    $scope.endDate = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.startDate = new Date(year, month, day);
    $scope.endDate = new Date(year, month, day);
  };

  $scope.formats = ['dd-MM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }

  $scope.setError = function(){
         $scope.errorButton = 'error';
         $scope.byDelivered = '';
         $scope.search = 'error';
  }

  $scope.setDelivered = function(){
          $scope.byDelivered = 'delivered';
          $scope.errorButton = '';
          $scope.search = 'delivered';
  }

  $scope.setTransaction = function() {
      $scope.byDelivered = '';
      $scope.errorButton = '';
      $scope.search = '';
  }
   $scope.getData = function(dateRange){
           tableData.getDatabyDate(this.dateRange).then(function(response){
               $scope.tables = response;
           })
        }


   console.log($scope.startDate.toISOString() + '' + $scope.endDate.toISOString());
    }]);
