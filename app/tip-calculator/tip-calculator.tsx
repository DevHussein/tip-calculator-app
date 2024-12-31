import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Image,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { InputGroup } from "~/components/ui/input-group";
import { set, useForm } from "react-hook-form";

function TipCalculator() {
  // const [bill, setBill] = useState();
  // const [tipPercentage, setTipPercentage] = useState();
  // const [people, setPeople] = useState();

  // const tipAmount = (bill * (tipPercentage / 100)) / people || 0;
  // const total = (bill + tipAmount) / people || 0;

  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
    // defaultValues: {
    //   bill: 0,
    //   tipPercentage: 0,
    //   people: 0,
    // },
  });

  const bill = watch("bill");
  const tipPercentage = watch("tipPercentage");
  const tipInput = watch("tipInput");
  const people = watch("people");

  const tipAmount =
    (Number(bill) * (Number(tipPercentage) || Number(tipInput))) /
      100 /
      Number(people) || 0;
  const total = (Number(bill) + Number(tipAmount)) / Number(people) || 0;

  const tipsPercentages = [5, 10, 15, 25, 50];
  return (
    <Box>
      <Center as="header" pt={"50px"}>
        <Image src="/images/logo.svg" alt="Splitter logo" />
      </Center>
      <Box
        as="main"
        bg={"white"}
        mt={{ base: "40px", laptop: "88px" }}
        borderTopRadius={"25px"}
        p={{ base: "32px" }}
        maxW={"920px"}
        mx={"auto"}
        laptop={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "40px",
          borderRadius: "25px",
        }}
      >
        <Box>
          <Box>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Heading as={"label"} id="bill" textStyle={"label"}>
                Bill
              </Heading>
              {errors.bill && (
                <Heading
                  as={"span"}
                  textStyle={"label"}
                  color={"red"}
                  fontSize={"13px"}
                  fontFamily={"Space Mono"}
                >
                  {errors.bill.message}
                </Heading>
              )}
            </Flex>

            <InputGroup
              w={"full"}
              mt={"6px"}
              startElement={
                <Image src="/images/icon-dollar.svg" alt="icon dollar" />
              }
            >
              <Input
                {...register("bill", {
                  required: "Bill is required",
                  min: {
                    value: 1,
                    message: "Bill must be a positive number",
                  },
                })}
                id="bill"
                bg={"powderBlue"}
                _hover={{ border: "2px aquamarine solid", cursor: "pointer" }}
                focusRing={"none"}
                textAlign={"right"}
                textStyle={"input"}
                p={"6px"}
                border={errors.bill ? "2px solid red" : "none"}
              />
            </InputGroup>
          </Box>
          <Box mt={{ base: "32px", laptop: "" }}>
            <Heading as={"label"} textStyle={"label"}>
              Select Tip %
            </Heading>
            <Grid
              templateColumns="repeat(2,1fr)"
              laptop={{ gridTemplateColumns: "repeat(3,1fr)" }}
              gapX={"17px"}
              gapY={"16px"}
              mt={4}
            >
              {tipsPercentages.map((tip, index) => (
                <GridItem key={index}>
                  <Button
                    onClick={() => {
                      setValue("tipPercentage", tip);
                      setValue("tipInput", null);
                    }}
                    _active={{ bg: "aquamarine", color: "deepTeal" }}
                    bg={tipPercentage === tip ? "aquamarine" : "deepTeal"}
                    color={tipPercentage === tip ? "deepTeal" : "white"}
                    w={"147px"}
                    h={"48px"}
                    borderRadius={"5px"}
                    textStyle={"button"}
                  >
                    {tip}%
                  </Button>
                </GridItem>
              ))}
              <GridItem>
                <Input
                  {...register("tipInput", {
                    required: "Please select or input a tip percentage",
                    valueAsNumber: true,
                    validate: (value) =>
                      value > 0 || "Tip percentage must be greater than 0",
                  })}
                  bg={"powderBlue"}
                  color={"dustyTeal"}
                  placeholder="Custom"
                  _placeholder={{
                    color: "dustyTeal",
                    fontSize: "24px",
                    fontWeight: "bold",
                    lineHeight: "auto",
                    letterSpacing: "0",
                  }}
                  textAlign={"right"}
                  border={"none"}
                  w={"147px"}
                  h={"48px"}
                  borderRadius={"5px"}
                  textStyle={"tipInput"}
                  onChange={(e) => {
                    const customValue = parseFloat(e.target.value);
                    setValue("tipInput", customValue);
                    setValue("tipPercentage", null);
                  }}
                />
              </GridItem>
            </Grid>
          </Box>
          <Box mt={"32px"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Heading as={"label"} textStyle={"label"}>
                Number of People
              </Heading>
              {errors.people && (
                <Heading
                  as={"span"}
                  textStyle={"label"}
                  color={"red"}
                  fontSize={"13px"}
                  fontFamily={"Space Mono"}
                >
                  {errors.people.message}
                </Heading>
              )}
            </Flex>

            <InputGroup
              w={"full"}
              mt={"6px"}
              startElement={
                <Image src="/images/icon-person.svg" alt="icon dollar" />
              }
            >
              <Input
                {...register("people", {
                  required: "Number of people is required",
                  min: {
                    value: 1,
                    message: "Can't be zero",
                  },
                })}
                onChange={(e) => setValue("people", e.target.value)}
                id="number-of-people"
                _hover={{ border: "2px aquamarine solid", cursor: "pointer" }}
                bg={"powderBlue"}
                focusRing={"none"}
                textAlign={"right"}
                textStyle={"input"}
                p={"6px"}
                border={errors.people ? "2px solid red" : "none"}
              />
            </InputGroup>
          </Box>
        </Box>
        <Flex
          direction={"column"}
          justifyContent={"space-between"}
          bg="deepTeal"
          rounded={"15px"}
          mt={{ base: "32px", laptop: "0" }}
          pr={"22px"}
          pl={"24px"}
          pt={{ base: "37px", laptop: "32px" }}
          pb={"24px"}
        >
          <Box spaceY={"20px"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Box>
                <Heading
                  as={"label"}
                  fontFamily={"Space Mono"}
                  fontSize={"16px"}
                  color={"white"}
                  lineHeight={"1"}
                  m={0}
                  p={0}
                >
                  Tip Amount
                  <Heading
                    as={"span"}
                    fontSize={"13px"}
                    color={"steelGray"}
                    fontFamily={"Space Mono"}
                    lineHeight={"1"}
                  >
                    <br />/ person
                  </Heading>
                </Heading>
              </Box>
              <Box>
                <Heading
                  as={"span"}
                  textStyle={"label"}
                  fontSize={"32px"}
                  color={"aquamarine"}
                  fontWeight={"bold"}
                  fontFamily={"Space Mono"}
                  letterSpacing={"-0.67px"}
                >
                  ${tipAmount.toFixed(2)}
                </Heading>
              </Box>
            </Flex>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Box>
                <Heading
                  as={"label"}
                  fontSize={"16px"}
                  color={"white"}
                  m={0}
                  p={0}
                  lineHeight={"1"}
                  fontFamily={"Space Mono"}
                >
                  Total
                </Heading>
                <Heading
                  fontFamily={"Space Mono"}
                  as={"span"}
                  fontSize={"13px"}
                  color={"steelGray"}
                  m={0}
                  p={0}
                  lineHeight={"1"}
                >
                  <br />/ person
                </Heading>
              </Box>
              <Box>
                <Heading
                  as={"label"}
                  textStyle={"label"}
                  fontSize={"32px"}
                  fontWeight={"bold"}
                  fontFamily={"Space Mono"}
                  color={"aquamarine"}
                  letterSpacing={"-0.67px"}
                >
                  ${total.toFixed(2)}
                </Heading>
              </Box>
            </Flex>
          </Box>
          <Button
            bg={"aquamarine"}
            mt={"32px"}
            w={"full"}
            fontSize={"20px"}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            color={"deepTeal"}
            py={"9px"}
            px={"32px"}
            onClick={() => {
              setValue("tip", 0);
              setValue("tipInput", 0);
              setValue("tipPercentage", 0);
              setValue("people", 0);
              setValue("bill", 0);
            }}
          >
            Reset
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default TipCalculator;
