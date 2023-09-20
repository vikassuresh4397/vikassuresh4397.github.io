import { Center, Text, Box, Grid, Image, Container } from "@chakra-ui/react";
import React from "react";
import MyGithub from "../Components/MyGithub";

export const About = () => {
  return (
    <Container maxW="container.xl" p="10%">
      <Box id="about" className="about section">
        <Center fontSize={{ base: 28, md: 40 }} color="yellow" position="relative">
          <Text fontWeight={600}>About</Text>
        </Center>
        <br />
        <Center>
          <Grid
            position="relative"
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap="5px"
          >
            <Box width="100%" m="5px">
              <Text color="white" textAlign="left" id="user-detail-intro">
                An aspiring web developer, a lifelong learner, skilled in
                front-end and back-end web development and passionate about
                creating responsive and user-friendly websites. Eager to begin
                a career as a web developer. Currently learning CSS,
                JavaScript, React, HTML, Chakra UI, Node.js.
              </Text>
            </Box>
            <Box width="100%" m="5px">
              <Text color="white" textAlign="left">
                <span fontWeight={500}>Masai School, Bangalore</span> <br />
                Full Stack Web Development (Full Time)
                <br />
                Aug, 2022 - Present <br />
                Navi Mumbai,Maharashtra <br />
                Masters in Engineering (Civil Engg) - Mumbai University | 2022-2023
              </Text>
            </Box>
            <Box width="100%" m="5px">
              <Image
                id="github-stats-card"
                width="100%"
                src="https://github-readme-streak-stats.herokuapp.com/?user=vikassuresh4397&theme=dark"
              />
            </Box>

            <Box width="100%" m="5px">
              <Image
                id="github-top-langs"
                width="100%"
                src="https://github-readme-stats.vercel.app/api?username=vikassuresh4397&include_all_commits=true&count_private=true&show_icons=true&line_height=20&title_color=7A7ADB&icon_color=2234AE&text_color=D3D3D3&bg_color=0,000000,130F40"
                alt="vikassuresh4397"
              />
            </Box>

            <Box width="100%" m="5px">
              <Image
                id="github-streak-stats"
                width="100%"
                src="https://github-readme-stats.vercel.app/api/top-langs?username=vikassuresh4397&show_icons=true&locale=en&layout=compact&title_color=7A7ADB&icon_color=2234AE&text_color=D3D3D3&bg_color=0,000000,130F40"
                alt="vikassuresh4397"
              />
            </Box>
          </Grid>
        </Center>
        <MyGithub />
      </Box>
    </Container>
  );
};
