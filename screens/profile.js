import { Heading, Center, View, Image, Text, VStack, Button } from "native-base";
import { Header } from "../components";

const Profile = () => {
  return (
    <>
      <View backgroundColor={"#9A1314"} w={"full"} h={"300"} borderBottomLeftRadius={"40"} borderBottomRightRadius={"40"}>
        <Center>
          <Heading color={"white"} mt={"50"} mb={"10"}>
            Profile
          </Heading>
          <Image
            source={require("../assets/profile.png")}
            resizeMode="contain"
            w="150"
            h="150"
            alt="Profil Logo"
            borderRadius={"full"}
          />
        </Center>
      </View>
      <View mx={8} mt={"5"}>
        <VStack mb={"5"} >
          <Text bold={true} fontSize={"20"}>
            Nama :
          </Text>
          <Text fontSize={"20"} fontWeight={"light"}>
            Arjuna January Putra Dirgantara
          </Text>
        </VStack>
        <VStack mb={"5"} >
          <Text bold={true} fontSize={"20"}>
            NIM :
          </Text>
          <Text fontSize={"20"} fontWeight={"light"}>
            1204210023
          </Text>
        </VStack>
        <VStack mb={"5"} >
          <Text bold={true} fontSize={"20"}>
            Program Studi :
          </Text>
          <Text fontSize={"20"} fontWeight={"light"}>
            Sistem Informasi
          </Text>
        </VStack>
        <VStack mb={"5"} >
          <Text bold={true} fontSize={"20"}>
            Email :
          </Text>
          <Text fontSize={"20"} fontWeight={"light"}>
            izumiidesu@gmail.com
          </Text>
        </VStack>
      </View>
      <Center>
        <Button bg={"#9A1314"} mb={"2"} w={"20%"} >
          <Text color={"white"} bold={true}>Logout</Text>
        </Button>
        <Image
          source={require("../assets/telkom.png")}
          resizeMode="contain"
          w="75"
          h="75"
          alt="Profil Logo"
          borderRadius={"full"}
        />
      </Center>
    </>
  );
};

export default Profile;