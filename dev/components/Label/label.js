


var Label = React.createClass({
            render: function() {
                var labelStyle = {
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    padding: 13,
                    margin: 0
                };

                return (
                    <p style={labelStyle}>{this.props.color}</p>
                );
            }
        });