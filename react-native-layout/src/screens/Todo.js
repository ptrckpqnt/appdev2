import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Todo({ navigation }) {

  const [todoText, setTodoText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [todos, setTodos] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const [menuVisible, setMenuVisible] = useState(false);

  const addTodo = () => {
    if (todoText.trim() === "") return;

    const newTodo = {
      id: Date.now().toString(),
      text: todoText,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTodoText("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const confirmDelete = (id) => {
    setSelectedTodo(id);
    setModalVisible(true);
  };

  const deleteTodo = () => {
    setTodos(todos.filter(todo => todo.id !== selectedTodo));
    setModalVisible(false);
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchText.toLowerCase())
  );

  const logout = () => {
    setMenuVisible(false);

    if (navigation) {
      navigation.replace("Login");
    }

    console.log("User logged out");
  };

  const renderTodo = ({ item }) => (
    <View style={styles.todoCard}>

      <TouchableOpacity onPress={() => toggleTodo(item.id)}>
        <Ionicons
          name={item.completed ? "checkbox" : "square-outline"}
          size={24}
          color="#4CAF50"
        />
      </TouchableOpacity>

      <Text style={[styles.todoText, item.completed && styles.completed]}>
        {item.text}
      </Text>

      <TouchableOpacity onPress={() => confirmDelete(item.id)}>
        <Ionicons name="trash" size={22} color="#ff4444" />
      </TouchableOpacity>

    </View>
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Todo List</Text>

        <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Ionicons name="menu" size={28} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>

        <Ionicons name="search-outline" size={18} color="gray" />

        <TextInput
          style={styles.searchInput}
          placeholder="Search tasks..."
          value={searchText}
          onChangeText={setSearchText}
        />

      </View>

      {/* Add Todo */}
      <View style={styles.addContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter new task..."
          value={todoText}
          onChangeText={setTodoText}
        />

        <TouchableOpacity style={styles.addBtn} onPress={addTodo}>
          <Ionicons name="add" size={22} color="white" />
        </TouchableOpacity>
      </View>

      {/* Todo List */}
      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id}
        renderItem={renderTodo}
      />

      {/* Delete Confirmation Modal */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>

            <Text style={styles.modalTitle}>Delete Task</Text>
            <Text style={styles.modalText}>
              Are you sure you want to delete this task?
            </Text>

            <View style={styles.modalButtons}>

              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={deleteTodo}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>

            </View>

          </View>
        </View>
      </Modal>

      {/* Hamburger Menu Modal */}
      <Modal transparent visible={menuVisible} animationType="fade">
        <TouchableOpacity
          style={styles.menuOverlay}
          onPress={() => setMenuVisible(false)}
        >
          <View style={styles.menuBox}>

            <TouchableOpacity
              style={styles.logoutItem}
              onPress={logout}
            >
              <Ionicons name="log-out-outline" size={20} color="black" />
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>

          </View>
        </TouchableOpacity>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: "#ffffff"
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15
  },

    header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
    },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e9e9e9",
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 30
  },

  searchInput: {
    flex: 1,
    padding: 10
  },

  addContainer: {
    flexDirection: "row",
    marginBottom: 15
  },

  input: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 8
  },

  addBtn: {
    backgroundColor: "#4CAF50",
    marginLeft: 10,
    padding: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },

todoCard: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#ffffff",
  padding: 12,
  borderRadius: 10,
  marginBottom: 10,
  borderWidth: 1,
  borderColor: "#e5e5e5"
    
  },

  todoText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16
  },

  completed: {
    textDecorationLine: "line-through",
    color: "gray"
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)"
  },

  modalBox: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },

  modalText: {
    marginBottom: 20
  },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },

  cancelBtn: {
    marginRight: 15
  },

  cancelText: {
    color: "gray"
  },

  deleteBtn: {
    backgroundColor: "#ff4444",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 5
  },

  deleteText: {
    color: "white"
  },

  menuOverlay: {
    flex: 1,
    alignItems: "flex-end",
    paddingTop: 90,
    paddingRight: 20,
    backgroundColor: "rgba(0,0,0,0.2)"
  },

  menuBox: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    width: 150,
    elevation: 5
  },

  logoutItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8
  },

  logoutText: {
    marginLeft: 8,
    fontSize: 16
  }

});