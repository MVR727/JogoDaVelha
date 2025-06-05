import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

    const cell = () =>{
        return(<TouchableOpacity style={style.cell}>
            <Text style={style.cellcontetnt}></Text>
          </TouchableOpacity>
        );
    }


  return (
    <View
      style={style.container}
        
      
    >
      <Text style={style.title}>Joga da Velha</Text>
      <Text style={style.status}>Vencedor</Text>

      <View style={style.board}>
        <View style={style.row}>
        {cell()}
        {cell()}
        {cell()}
        </View>

        <View style={style.row}>    
        {cell()}
        {cell()}
        {cell()}
        </View>

        <View style={style.row}>
        {cell()}
        {cell()}
        {cell()}
        </View>

      </View>
    </View>
  );
}


const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B2D8CE",
    },
    title:{
        fontSize: 24,
        fontWeight:"bold",
        marginBottom:20,
    },
    status:{
        fontSize:18,
        marginBottom:20,
        },
    board:{
        marginBottom:20,
    },
    row:{
        flexDirection:'row'
    },
    cell:{
        width: 80,
        height:80,
        borderWidth:2,
        borderColor: '#5459AC',
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FFFFFF"
    },
    cellcontetnt: {
    fontSize: 36,
    fontWeight:"bold"
    }
})
