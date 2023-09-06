import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slice/todoSlice";

const InputForm = () => {
  const [currentVal, setCurrentVal] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (currentVal.length !== 0) {
      dispatch(addTodo(currentVal));
      setCurrentVal("");
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.addFormContainer}
    >
      <TextInput
        onChangeText={setCurrentVal}
        style={styles.inputField}
        placeholder="할 일 작성"
        value={currentVal}
        onSubmitEditing={handleSubmit}
      />

      <Pressable style={styles.addBtn} onPress={handleSubmit}>
        <Text style={styles.addBtnText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: "row",
    marginTop: "auto",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  inputField: {
    flex: 1,
    width: "100%",
    height: 42,
    borderRadius: 4,
    marginRight: 25,
    padding: 5,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    color: "#000000",
    fontSize: 15,
    textAlignVertical: "center",
  },
  addBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  addBtnText: {
    color: "white",
    fontSize: 25,
  },
});
