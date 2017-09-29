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
      var labels = [];
      var dictDelivered = {};
      var dictError = {};
      var keys = ["DELIVERED", "ERROR"]
      var delivered = [];
      var error = [];
      $http.get('http://localhost:3006/sender')
      .then(function(response){
        var json = response.data;
        for (var i = 0; i < json.length; i++){
            if(labels.indexOf(json[i].itemName) == -1){
                labels.push(json[i].itemName);
            }};
        // for (var i = 0; i < labels.length; i++){
        //     dictDelivered[labels[i]] = 0;
        //     dictError[labels[i]] = 0;
        //     };
        for(var j = 0; j < labels.length; j++)
          for (var i = 0; i < json.length; i++){
              if(json[i].messageState === "DELIVERED" && json[i].categoryName === labels[i]){
                dictDelivered[json[i].sender] = (dictDelivered[json[i].sender]) + 1;
              } else if(json[i].messageState === "ERROR"){
                dictError[json[i].sender] = (dictError[json[i].sender]) + 1;
              }};
        // for (var i = 0; i < labels.length; i++){
        //     delivered.push((Object.values(dictDelivered))[i]);
        //     error.push((Object.values(dictError))[i]);            
        //     };


      $scope.labels = labels;
      $scope.series = ['Delivered', 'Error'];
      $scope.options = { legend: { display: true } };
      $scope.data = [ delivered, error ];
      $scope.colours = ['#59bc45', '#e0e03e'];
})}]);
// Target
app.controller('barCtrlTarget', ['$scope', '$http',
    function($scope, $http){
      var labels = [];
      var dictDelivered = {};
      var dictError = {};
      var delivered = [];
      var error = [];
      $http.get('http://localhost:3005/target')
      .then(function(response){
        var json = response.data;
        for (var i = 0; i < json.length; i++){
            if(labels.indexOf(json[i].sender) == -1){
                labels.push(json[i].sender);
            }};
        for (var i = 0; i < labels.length; i++){
            dictDelivered[labels[i]] = 0;
            dictError[labels[i]] = 0;
            };
        for (var i = 0; i < json.length; i++){
            if(json[i].messageState === "DELIVERED"){
              dictDelivered[json[i].sender] = (dictDelivered[json[i].sender]) + 1;
            } else if(json[i].messageState === "ERROR"){
              dictError[json[i].sender] = (dictError[json[i].sender]) + 1;
            }};
        for (var i = 0; i < labels.length; i++){
            delivered.push((Object.values(dictDelivered))[i]);
            error.push((Object.values(dictError))[i]);            
            };
      $scope.labels = labels;
      $scope.series = ['Delivered', 'Error'];
      $scope.options = { legend: { display: true } };
      $scope.data = [ delivered, error ];
      $scope.colours = ['#4f89ff', '#db4434'];
})}]);
// Integration
app.controller('barCtrlInteg', ['$scope', '$http',
    function($scope, $http){
      var labels = [];
      var dictDelivered = {};
      var dictError = {};
      var delivered = [];
      var error = [];
      $http.get('http://localhost:3007/integration')
      .then(function(response){
        var json = response.data;
        for (var i = 0; i < json.length; i++){
            if(labels.indexOf(json[i].sender) == -1){
                labels.push(json[i].sender);
            }};
        for (var i = 0; i < labels.length; i++){
            dictDelivered[labels[i]] = 0;
            dictError[labels[i]] = 0;
            };
        for (var i = 0; i < json.length; i++){
            if(json[i].messageState === "DELIVERED"){
              dictDelivered[json[i].sender] = (dictDelivered[json[i].sender]) + 1;
            } else if(json[i].messageState === "ERROR"){
              dictError[json[i].sender] = (dictError[json[i].sender]) + 1;
            }};
        for (var i = 0; i < labels.length; i++){
            delivered.push((Object.values(dictDelivered))[i]);
            error.push((Object.values(dictError))[i]);            
            };
      $scope.labels = labels;
      $scope.series = ['Delivered', 'Error'];
      $scope.options = { legend: { display: true } };
      $scope.data = [ delivered, error ];
      $scope.colours = ['#9671ed', '#ff9e30'];
})}]);
