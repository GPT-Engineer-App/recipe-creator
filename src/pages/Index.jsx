import React, { useState } from "react";
import { Container, VStack, Text, CheckboxGroup, Checkbox, Button, Input, HStack, Box, IconButton } from "@chakra-ui/react";
import { FaSave, FaUtensils } from "react-icons/fa";

const Index = () => {
  const [allergies, setAllergies] = useState([]);
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  const [ingredient, setIngredient] = useState("");

  const handleAllergyChange = (value) => setAllergies(value);
  const handleLikesChange = (value) => setLikes(value);
  const handleDislikesChange = (value) => setDislikes(value);

  const handleAddLike = () => {
    if (ingredient) {
      setLikes([...likes, ingredient]);
      setIngredient("");
    }
  };

  const handleAddDislike = () => {
    if (ingredient) {
      setDislikes([...dislikes, ingredient]);
      setIngredient("");
    }
  };

  const handleSave = () => {
    // Save the data to the user's database
    console.log("Allergies:", allergies);
    console.log("Likes:", likes);
    console.log("Dislikes:", dislikes);
    // Here you would typically make an API call to save the data
  };

  const handleGenerateRecipes = () => {
    // Generate recipes using ChatGPT based on the user's preferences
    console.log("Generating recipes...");
    // Here you would typically make an API call to ChatGPT
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Food Preferences</Text>

        <Box width="100%">
          <Text fontSize="lg">Allergies</Text>
          <CheckboxGroup colorScheme="red" onChange={handleAllergyChange}>
            <VStack alignItems="flex-start">
              <Checkbox value="Peanuts">Peanuts</Checkbox>
              <Checkbox value="Shellfish">Shellfish</Checkbox>
              <Checkbox value="Dairy">Dairy</Checkbox>
              <Checkbox value="Gluten">Gluten</Checkbox>
            </VStack>
          </CheckboxGroup>
        </Box>

        <Box width="100%">
          <Text fontSize="lg">Likes</Text>
          <HStack>
            <Input placeholder="Add ingredient" value={ingredient} onChange={(e) => setIngredient(e.target.value)} />
            <Button onClick={handleAddLike}>Add</Button>
          </HStack>
          <VStack alignItems="flex-start">
            {likes.map((like, index) => (
              <Text key={index}>{like}</Text>
            ))}
          </VStack>
        </Box>

        <Box width="100%">
          <Text fontSize="lg">Dislikes</Text>
          <HStack>
            <Input placeholder="Add ingredient" value={ingredient} onChange={(e) => setIngredient(e.target.value)} />
            <Button onClick={handleAddDislike}>Add</Button>
          </HStack>
          <VStack alignItems="flex-start">
            {dislikes.map((dislike, index) => (
              <Text key={index}>{dislike}</Text>
            ))}
          </VStack>
        </Box>

        <HStack spacing={4}>
          <IconButton aria-label="Save" icon={<FaSave />} size="lg" onClick={handleSave} />
          <IconButton aria-label="Generate Recipes" icon={<FaUtensils />} size="lg" onClick={handleGenerateRecipes} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
