import { useState } from "react";
import { Container, VStack, Input, Button, List, ListItem, Text } from "@chakra-ui/react";

const Playlists = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [playlists, setPlaylists] = useState([]);

  const handleAddPlaylist = () => {
    if (playlistName.trim() !== "") {
      setPlaylists([...playlists, playlistName]);
      setPlaylistName("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Input
          placeholder="Enter playlist name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleAddPlaylist}>Add Playlist</Button>
        <List spacing={3} width="100%">
          {playlists.map((playlist, index) => (
            <ListItem key={index} padding={2} borderWidth={1} borderRadius="md">
              <Text>{playlist}</Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Playlists;