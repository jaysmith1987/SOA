// Date
app.controller('dateCtrl', ['$scope', '$http',
    function($scope, $http){
      var lst = [];
      $http.get('api/json')
      .then(function(response){
        var json = response.data;
        var delivered = 0;
        var error = 0;
        for (var i = 0; i < json.length; i++){
          if(json[i].messageState === "DELIVERED") {
            delivered++;
          } else if(json[i].messageState === "ERROR"){
            error++;
          }
        };
        lst.push(delivered, error);
        })
      $scope.labels = ["Delivered", "Error"];
      $scope.data = lst;
      $scope.series = ["Delivered", "Error"];
      $scope.colours = ['#72C02C', '#db4434'];
    }]);

// Pie Chart
// Total
app.controller('pieCtrlTotal', ['$scope', '$http',
    function($scope, $http){
      var lst = [];
      $http.get('api/json')
      .then(function(response){
        var json = response.data;
        var delivered = 0;
        var error = 0;
        for (var i = 0; i < json.length; i++){
          if(json[i].messageState === "DELIVERED") {
            delivered++;
          } else if(json[i].messageState === "ERROR"){
            error++;
          }
        };
        lst.push(delivered, error);
        })
      $scope.labels = ["Delivered", "Error"];
      $scope.series = ["Delivered", "Error"];
      $scope.options = { legend: { display: true } };
      $scope.data = lst;
      $scope.colours = ['#72C02C', '#db4434'];
    }]);
// Sender
app.controller('pieCtrlSender', ['$scope', '$http',
    function($scope, $http){
      var lst = [];
      $http.get('api/json')
      .then(function(response){
        var json = response.data;
        var delivered = 0;
        var error = 0;
        for (var i = 0; i < json.length; i++){
          if(json[i].messageState === "DELIVERED") {
            delivered++;
          } else if(json[i].messageState === "ERROR"){
            error++;
          }
        };
        lst.push(delivered, error);
        })
      $scope.labels = ["Delivered", "Error"];
      $scope.series = ["Delivered", "Error"];
      $scope.options = { legend: { display: true } };
      $scope.data = lst;
      $scope.colours = ['#59bc45', '#e0e03e'];
    }]);
// Target
app.controller('pieCtrlTarget', ['$scope', '$http',
    function($scope, $http){
      var lst = [];
      $http.get('api/json')
      .then(function(response){
        var json = response.data;
        var delivered = 0;
        var error = 0;
        for (var i = 0; i < json.length; i++){
          if(json[i].messageState === "DELIVERED") {
            delivered++;
          } else if(json[i].messageState === "ERROR"){
            error++;
          }
        };
        lst.push(delivered, error);
        })
      $scope.labels = ["Delivered", "Error"];
      $scope.series = ["Delivered", "Error"];
      $scope.options = { legend: { display: true } };
      $scope.data = lst;
      $scope.colours = ['#4f89ff', '#db4434'];
    }]);
// Integration
app.controller('pieCtrlInteg', ['$scope', '$http',
    function($scope, $http){
      var lst = [];
      $http.get('api/json')
      .then(function(response){
        var json = response.data;
        var delivered = 0;
        var error = 0;
        for (var i = 0; i < json.length; i++){
          if(json[i].messageState === "DELIVERED") {
            delivered++;
          } else if(json[i].messageState === "ERROR"){
            error++;
          }
        };
        lst.push(delivered, error);
        })
      $scope.labels = ["Delivered", "Error"];
      $scope.series = ["Delivered", "Error"];
      $scope.options = { legend: { display: true } };
      $scope.data = lst;
      $scope.colours = ['#9671ed', '#ff9e30'];
    }]);



// Bar Chart
// Sender
app.controller('barCtrlSender', ['$scope', '$http',
    function($scope, $http){
      var nameLst = [];
      var deliveredLst = [];
      var errorLst = [];
      var keys = ["DELIVERED", "ERROR"];

      $http.get('http://localhost:3006/sender')
      .then(function(response){
        var json = response.data;
        for (var i=0; i < json.length; i++){
          if(nameLst.indexOf(json[i].itemName) == -1	){
            nameLst.push(json[i].itemName);
                if(json[i].messageState === "DELIVERED"){
                    deliveredLst.push(json[i].countNum);
                    errorLst.push(0);
                } else if(json[i].messageState === "ERROR"){
                    deliveredLst.push(0);
                    errorLst.push(json[i].countNum);
                }
            } else{
                var pos = nameLst.indexOf(json[i].itemName);
                if(json[i].messageState === "DELIVERED"){
                    deliveredLst.splice(pos, 1, (json[i].countNum));
                } else if(json[i].messageState === "ERROR"){
                    errorLst.splice(pos, 1, (json[i].countNum));
                }        
            };
        };

      $scope.labels = nameLst;
      $scope.series = ['Delivered', 'Error'];
      $scope.options = {
        legend: {display: true},
        scaleShowValues: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            ticks: {
              autoSkip: false
            }
          }]
        }
      };
      $scope.data = [ deliveredLst, errorLst ];
      $scope.colours = ['#59bc45', '#e0e03e'];
})}]);


// Target
app.controller('barCtrlTarget', ['$scope', '$http',
    function($scope, $http){
      var nameLst = [];
      var deliveredLst = [];
      var errorLst = [];
      var keys = ["DELIVERED", "ERROR"];

      $http.get('http://localhost:3005/target')
      .then(function(response){
        var json = response.data;
        for (var i=0; i < json.length; i++){
          if(nameLst.indexOf(json[i].itemName) == -1	){
            nameLst.push(json[i].itemName);
                if(json[i].messageState === "DELIVERED"){
                    deliveredLst.push(json[i].countNum);
                    errorLst.push(0);
                } else if(json[i].messageState === "ERROR"){
                    deliveredLst.push(0);
                    errorLst.push(json[i].countNum);
                }
            } else{
                var pos = nameLst.indexOf(json[i].itemName);
                if(json[i].messageState === "DELIVERED"){
                    deliveredLst.splice(pos, 1, (json[i].countNum));
                } else if(json[i].messageState === "ERROR"){
                    errorLst.splice(pos, 1, (json[i].countNum));
                }        
            };
        };

      $scope.labels = nameLst;
      $scope.series = ['Delivered', 'Error'];
      $scope.options = {
        legend: {display: true},
        scaleShowValues: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            ticks: {
              autoSkip: false
            }
          }]
        }
      };
      $scope.data = [ deliveredLst, errorLst ];
      $scope.colours = ['#4f89ff', '#db4434'];
})}]);
// Integration
app.controller('barCtrlInteg', ['$scope', '$http',
    function($scope, $http){
      var nameLst = [];
      var deliveredLst = [];
      var errorLst = [];
      var keys = ["DELIVERED", "ERROR"];

      $http.get('http://localhost:3007/integration')
      .then(function(response){
        var json = response.data;
        for (var i=0; i < json.length; i++){
          if(nameLst.indexOf(json[i].itemName) == -1	){
            nameLst.push(json[i].itemName);
                if(json[i].messageState === "DELIVERED"){
                    deliveredLst.push(json[i].countNum);
                    errorLst.push(0);
                } else if(json[i].messageState === "ERROR"){
                    deliveredLst.push(0);
                    errorLst.push(json[i].countNum);
                }
            } else{
                var pos = nameLst.indexOf(json[i].itemName);
                if(json[i].messageState === "DELIVERED"){
                    deliveredLst.splice(pos, 1, (json[i].countNum));
                } else if(json[i].messageState === "ERROR"){
                    errorLst.splice(pos, 1, (json[i].countNum));
                }        
            };
        };

      $scope.labels = nameLst;
      $scope.series = ['Delivered', 'Error'];
      $scope.options = {
        legend: {display: true},
        scaleShowValues: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            ticks: {
              autoSkip: false
            }
          }]
        }
      };
      $scope.data = [ deliveredLst, errorLst ];
      $scope.colours = ['#9671ed', '#ff9e30'];
})}]);
