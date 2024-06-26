import { useState, useRef } from "react";
import { Container, VStack, Text, Box, Image, Button, HStack, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSkipForward = () => {
    audioRef.current.currentTime += 10; // Skip forward 10 seconds
  };

  const handleSkipBackward = () => {
    audioRef.current.currentTime -= 10; // Skip backward 10 seconds
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box boxSize="sm">
          <Image src="/images/album-cover.jpg" alt="Album Cover" borderRadius="md" />
        </Box>
        <Text fontSize="2xl" fontWeight="bold">Song Title</Text>
        <Text fontSize="lg" color="gray.500">Artist Name</Text>
        <HStack spacing={4}>
          <IconButton aria-label="Previous" icon={<FaBackward />} size="lg" onClick={handleSkipBackward} />
          <IconButton aria-label="Play/Pause" icon={isPlaying ? <FaPause /> : <FaPlay />} size="lg" onClick={handlePlayPause} />
          <IconButton aria-label="Next" icon={<FaForward />} size="lg" onClick={handleSkipForward} />
        </HStack>
        <Button colorScheme="blue" size="lg">Start Listening</Button>
        <Button as={Link} to="/playlists" colorScheme="teal" size="lg">Go to Playlists</Button> {/* Add button to navigate to Playlists page */}
      </VStack>
    <audio ref={audioRef} src="/path/to/your/song.mp3" />
    </Container>
  );
};

export default Index;