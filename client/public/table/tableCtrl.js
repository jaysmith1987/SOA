app.controller('tableCtrl', ['$scope', '$http', 'tableData', 'moment','$location',
    function($scope, $http, tableData, moment, $location){
        $scope.tables = [];
        $scope.lists = [];
        $scope.expanded = false;  
        $scope.showTime = false;  
        $scope.showTime2 = false;
        $scope.md = false;
        $scope.empty = false;

         
        tableData.getStandardData().then(function(data){
            $scope.tables = data;
        })

       

         $scope.orderByMe = function(x){
           $scope.myOrderBy = x;
           if($scope.myOrderBy === 'messageDate'){
             $scope.md = !$scope.md;
           }
           if(!$scope.md){
             $scope.reverse = true;
           }
           if($scope.md){
             $scope.reverse = false;
           }
         }

        

        $scope.theValue = function(selected){
          $scope.filterThis = selected;
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

  
  $scope.reset = function(dateRange){
    this.dateRange = null;
     tableData.getStandardData().then(function(data){
            $scope.tables = data;
        })
  };

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
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };



  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
    $scope.showTime = false;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
    $scope.showTime2 = false;
    $scope.showTime = false;
  };

  $scope.setDate = function(year, month, day) {
    $scope.startDate = new Date(year, month, day);
    $scope.endDate = new Date(year, month, day);
  };

  $scope.formats = ['MMM dd yyyy hh:mm:ss a', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
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
         $scope.hospital = '';
         $scope.selected = '';
         $scope.filterThis = '';
         $scope.search = 'error';
  }

  $scope.setDelivered = function(){
          $scope.byDelivered = 'delivered';
          $scope.errorButton = '';
          $scope.hospital = '';
          $scope.filterThis = '';
          $scope.selected = '';
          $scope.search = 'delivered';
  }

  $scope.setTransaction = function() {
      $scope.byDelivered = '';
      $scope.errorButton = '';
      $scope.search = '';
      $scope.filterThis = '';
      $scope.selected = '';
      $scope.hospital = '';
  }

  $scope.sethospital = function(){
    $scope.hospital = 'manual';
    $scope.errorButton = '';
    $scope.byDelivered = '';
    $scope.filterThis = '';
    $scope.selected = '';
    $scope.search = 'manual';
  }

  
   $scope.getData = function(dateRange){
           tableData.getDatabyDate(this.dateRange).then(function(response){
               $scope.tables = response;
           })
        }
    
   $scope.timePicker = function(){
     $scope.showTime = true;
     $scope.showTime2 = false;
   }

   $scope.timePicker2 = function(){
     $scope.showTime2 = true;
     $scope.showTime = false;
   }

   $scope.closeTime = function(){
     $scope.showTime = false;
     $scope.showTime2 = false;
   }

   $scope.closeTime2 = function(){
     $scope.showTime2 = false;
     $scope.showTime = false;
   }

  

   console.log($scope.startDate.toISOString() + '' + $scope.endDate.toISOString());
    }]);

