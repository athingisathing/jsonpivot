Array.prototype.pivotquick = function(options) {
    var defaults = { 
    xAxisField: '' ,
    yAxisField: '', zAxisField: ''
    }
        /*
    * The x-axis is the main horizontal row.
    * The z-axis is the sub horizontal row.
    * The y-axis is the left vertical column.
    */
    var data = this;
    data.config = $.extend(defaults, options)
    var yAxis = [];
    var matrix = [];
    data.forEach (function(row) {
        var yi = 1;
        var yObj = [];
        yObj = '{'+ yAxisField + ': ' + row[yAxisField] + '}';
        yi = yAxis.indexOf(yObj);
        if (yi==-1){
            yAxis.push(yObj );
            var yObj = {};
            yObj.Feature = row[yAxisField];
            yi = matrix.push(yObj);
            matrix[yi-1][row[xAxisField] ] = row[zAxisField];
            //matrix[yi-1]['dataource'] = row;
        }else{
            matrix[yi][ row[xAxisField]] = row[zAxisField];
            //matrix[yi]['dataource'] = row;
        };
    });
    return matrix
};
if (typeof jQuery !== 'undefined') {
    jQuery.pivot = function (o) {
        if (o instanceof Array) {
            return o.pivot()
        }
    }
}

Array.prototype.pivot = function(options) {
    var defaults = { 
    xAxisField: '' ,
    yAxisField: '', zAxisField: ''
    }
        /*
    * The x-axis is the main horizontal row.
    * The z-axis is the sub horizontal row.
    * The y-axis is the left vertical column.
    */
    var data = this;
    data.config = $.extend(defaults, options)
    var yAxis = [];
    var matrix = [];
    data.forEach (function(row) {
                    var xName = row[xAxisField].replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
                    if(xAxis.indexOf(xName) == -1) {
                        xAxis.push(xName);
		};
        var yi = 1;
        var yObj = [];
        yObj = '{'+ yAxisField + ': ' + row[yAxisField] + '}';
        yi = yAxis.indexOf(yObj);
        if (yi==-1){
            yAxis.push(yObj );
            var yObj = {};
            yObj.Feature = row[yAxisField];
            yi = matrix.push(yObj);
            matrix[yi-1][row[xAxisField] ] = row[zAxisField];
            //matrix[yi-1]['dataource'] = row;
        }else{
            matrix[yi][ row[xAxisField]] = row[zAxisField];
            //matrix[yi]['dataource'] = row;
        };
    });
            var y = 0 ;
            matrix.forEach(function(row,y) {
                var keys = Object.keys(row);
                y=y;
                var dif = diffArrays(xAxis,keys)
                dif.forEach(function(x) {
                        matrix[y][x] = ""
                })
            });
    return matrix
};
if (typeof jQuery !== 'undefined') {
    jQuery.pivot = function (o) {
        if (o instanceof Array) {
            return o.pivot()
        }
    }
}

Array.prototype.pivotwithcolumns = function(options) {
    var defaults = { 
    xAxisField: '' ,
    yAxisField: '',
    zAxisField: ''
    }
        /*
    * The x-axis is the main horizontal row.
    * The z-axis is the sub horizontal row.
    * The y-axis is the left vertical column.
    */
    var data = this;
    var data = this;
    data.config = $.extend(defaults, options)
            var yAxis = [],
            xAxis = ["Feature"],
            Columns = [{"field":"Feature","title":"Feature","width":100}],
            matrix = [];
            var xi;
		data.forEach(function(row) {
                    var xName = row[xAxisField].replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
                    xi = xAxis.indexOf(xName);
                    if( xi == -1) {
                        xAxis.push(xName);
                        var xObj = {};
                        xObj.field = xName
                        xObj.title = row[xAxisField];
                        Columns.push(xObj)
                    } else
                    {
                        if (row[xAxisField].length < 180){
                           if (Columns[xi-1].width < row[xAxisField].length * 7.5) {
                                Columns[xi-1].width = row[xAxisField].length * 7.5;
                           }
                        }

                    }
                    var yi = 1;
                    var yObj = [];
                    yObj = row[yAxisField];
                    yi = yAxis.indexOf(yObj);
                    if(yi == -1) {
                        yAxis.push(yObj);
                        var yObj = {};
                        yObj.Feature = row[yAxisField];
                        yi = matrix.push(yObj);
                        matrix[yi - 1][xName] = row[zAxisField];
                    } else {
                        matrix[yi][xName] = row[zAxisField];
                    };
                });
            });
            var y = 0 ;
            matrix.forEach(function(row,y) {
                var keys = Object.keys(row);
                y=y;
                var dif = diffArrays(xAxis,keys)
                dif.forEach(function(x) {
                        matrix[y][x] = ""
                })
            });
            if(!err) {
                return res.send([Columns, matrix]);
            } else {
                return console.log(err);
            }
    return matrix,Columns
};
if (typeof jQuery !== 'undefined') {
    jQuery.pivot = function (o) {
        if (o instanceof Array) {
            return o.pivot()
        }
    }
}

Array.prototype.pivotwithcolumns.Kendo = function(options) {
    var defaults = { 
    xAxisField: '',
    yAxisField:'',
    zAxisField: ''
    }
        /*
    * The x-axis is the main horizontal row.
    * The z-axis is the sub horizontal row.
    * The y-axis is the left vertical column.
    */
    var data = this;
            var yAxis = [],
            xAxis = ["Feature"],
            Columns = [{"field":"Feature","title":"Feature","width":100}],
            matrix = [];
            var xi;
		data.forEach(function(row) {
                    var xName = row[xAxisField].replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
                    xi = xAxis.indexOf(xName);
                    if( xi == -1) {
                        xAxis.push(xName);
                        var xObj = {};
                        xObj.field = xName
                        xObj.title = row[xAxisField];
                        xObj.width = 100;
                        Columns.push(xObj)
                    } else
                    {
                        if (row[xAxisField].length < 180){
                           if (Columns[xi-1].width < row[xAxisField].length * 7.5) {
                                Columns[xi-1].width = row[xAxisField].length * 7.5;
                           }
                        }

                    }
                    var yi = 1;
                    var yObj = [];
                    yObj = row[yAxisField];
                    yi = yAxis.indexOf(yObj);
                    if(yi == -1) {
                        yAxis.push(yObj);
                        var yObj = {};
                        yObj.Feature = row[yAxisField];
                        yi = matrix.push(yObj);
                        matrix[yi - 1][xName] = row[zAxisField];
                    } else {
                        matrix[yi][xName] = row[zAxisField];
                    };
                });
            var y = 0 ;
            matrix.forEach(function(row,y) {
                var keys = Object.keys(row);
                y=y;
                var dif = diffArrays(xAxis,keys)
                dif.forEach(function(x) {
                        matrix[y][x] = ""
                })
            });
            if(!err) {
                return res.send([Columns, matrix]);
            } else {
                return console.log(err);
            }
    return matrix,Columns
};
if (typeof jQuery !== 'undefined') {
    jQuery.pivot = function (o) {
        if (o instanceof Array) {
            return o.pivot()
        }
    }
}