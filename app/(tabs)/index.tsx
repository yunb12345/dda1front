import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const tags = ['Mexicana', 'Argentina', 'Saludable', 'Vegana'];
const recipes = [
  {
    image: require('../../assets/images/descarga_1.jpg'),
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus mauris ut sagittis lobortis.',
    tags: ['Mexicana', 'Saludable', 'Vegana'],
  },
  {
    image: require('../../assets/images/descarga_2.jpg'),
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus mauris ut sagittis lobortis.',
    tags: ['Mexicana', 'Saludable', 'Vegana'],
  },
  {
    image: require('../../assets/images/descarga_3.jpg'),
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus mauris ut sagittis lobortis.',
    tags: ['Mexicana', 'Saludable', 'Vegana'],
  },
];

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white px-4 pt-10">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <Image source={require('../../assets/images/descarga_1.jpg')} style={{ width: 40, height: 40 }} />
        <TextInput
          placeholder="Encontrar recetas..."
          className="flex-1 ml-3 bg-gray-100 p-2 rounded-xl"
        />
      </View>

      {/* Recetas de la semana */}
      <Text className="text-xl font-bold mb-2">Recetas de la semana</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
        <Image source={require('../../assets/images/descarga_1.jpg')} className="w-32 h-24 rounded-xl mr-2" />
        <Image source={require('../../assets/images/descarga_1.jpg')} className="w-32 h-24 rounded-xl mr-2" />
        <Image source={require('../../assets/images/descarga_1.jpg')} className="w-32 h-24 rounded-xl mr-2" />
      </ScrollView>

      {/* Filtros */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
        {tags.map((tag, i) => (
          <TouchableOpacity key={i} className="px-4 py-2 bg-gray-200 rounded-full mr-2">
            <Text>{tag}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de recetas */}
      <ScrollView className="mb-24">
        {recipes.map((recipe, i) => (
          <View key={i} className="flex-row mb-4 bg-white rounded-xl shadow p-2">
            <Image source={recipe.image} className="w-24 h-24 rounded-xl mr-2" />
            <View className="flex-1">
              <View className="flex-row justify-between">
                <Text className="font-bold text-base">{recipe.title}</Text>
                <TouchableOpacity>
                  <Ionicons name="heart-outline" size={20} color="black" />
                </TouchableOpacity>
              </View>
              <Text className="text-xs text-gray-600 mb-2">{recipe.description}</Text>
              <View className="flex-row flex-wrap">
                {recipe.tags.map((tag, j) => (
                  <Text key={j} className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full mr-1 mb-1">
                    {tag}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Footer fijo */}
      <View className="absolute bottom-0 left-0 right-0 bg-pink-200 p-4 flex-row items-center justify-between">
        <Text className="text-sm font-semibold">¿Todavía no tienes cuenta? ¡Únete!</Text>
        <TouchableOpacity className="bg-white px-3 py-1 rounded">
          <Text className="text-pink-600 font-semibold">Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>

      {/* Menú inferior */}
      <View className="absolute bottom-16 left-0 right-0 flex-row justify-around bg-white py-2 border-t border-gray-200">
        <TouchableOpacity><Ionicons name="home" size={24} /></TouchableOpacity>
        <TouchableOpacity><Ionicons name="add-circle" size={36} color="#FF6B81" /></TouchableOpacity>
        <TouchableOpacity><Ionicons name="person" size={24} /></TouchableOpacity>
      </View>
    </View>
  );
}
