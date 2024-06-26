import { Container, VStack, Text, Box, Image, Button, HStack, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box boxSize="sm">
          <Image src="/images/album-cover.jpg" alt="Album Cover" borderRadius="md" />
        </Box>
        <Text fontSize="2xl" fontWeight="bold">Song Title</Text>
        <Text fontSize="lg" color="gray.500">Artist Name</Text>
        <HStack spacing={4}>
          <IconButton aria-label="Previous" icon={<FaBackward />} size="lg" />
          <IconButton aria-label="Play" icon={<FaPlay />} size="lg" />
          <IconButton aria-label="Pause" icon={<FaPause />} size="lg" />
          <IconButton aria-label="Next" icon={<FaForward />} size="lg" />
        </HStack>
        <Button colorScheme="blue" size="lg">Start Listening</Button>
        <Button as={Link} to="/playlists" colorScheme="teal" size="lg">Go to Playlists</Button> {/* Add button to navigate to Playlists page */}
      </VStack>
    </Container>
  );
};

export default Index;