import {Text, View} from "react-native";
import React from "react";

interface PercentageChangeProps{
    value: number,
    style?: Object
}

const PercentageChange = ({value,style = {} } : PercentageChangeProps) =>{
    return (
        <Text style={[style, {color: value > 0 ? '#f10606' : '#4a9806'}]}>
            {value > 0 ? '+':''}{value} %
        </Text>
    )
}

export default PercentageChange;
