angular.module("jgr",[]).directive("autoplay",[function(){
    return {
      restrict:"ECMA",
      template:'<div><div id="{{data2}}" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li ng-repeat="x in data" data-target="#{{data2}}" data-slide-to="{{$index}}" ng-class="{active:$index==0}"></li></ol><div class="carousel-inner" role="listbox"><div ng-repeat="x in data" class="item " ng-class="{active:$index==0}"><img ng-src="{{x.pic}}" alt=""><div class="carousel-caption"></div></div></div><!-- Controls --><a class="left carousel-control" href="#{{data2}}" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#{{data2}}" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span><span class="sr-only">Next</span></a></div></div>',
      scope:{data:"=jgr",data2:"@jgr2"},
      replace:true,
      link:function(s,e,a){
        e.find(".carousel").carousel({
          interval: 1000
})
        
      }

    }
  }]).filter("f",[function(){
    return function(e){
      if(e=="jgr"){
        return "***"
      }else{
        return e
      }
        
    }
  }]);
