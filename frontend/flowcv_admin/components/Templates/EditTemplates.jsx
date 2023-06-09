import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { GrClose } from "react-icons/gr";
import CommonButton from "../Button";
import { useState } from "react";
import { useDataProvider, useNotify } from "react-admin";
import {
  LayoutButton,
  ColumnButton,
  ColumnWidth,
  FontElement,
  ColorsElement,
  HeadersElement,
} from "./Template";
import ColorsComponent from "./components/ColorsComponent";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: "80%", xs: "80%", lg: 1000, md: 1000 },
  height: "80vh",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  overflowY: "auto",
  p: 4,
  borderRadius: ".4rem",
};

const EditTemplate = ({ open, handleClose, fetchData, template = {} }) => {
  const [data, setData] = useState({});

  const dataProvider = useDataProvider();
  const notify = useNotify();

  const handleSave = async () => {
    const updatedTemplate = {
      ...template,
    };

    const admin = JSON.parse(localStorage.getItem("adminData")) || {};

    const res = await dataProvider.update(
      `admin/update-template/${template.uid}`,
      { data: updatedTemplate },
      admin.access_token
    );

    if (res.data.error) {
      notify(res.data.error.message, { type: "error" });
      return;
    }

    notify(`Template Updated`, { type: "success" });
    fetchData();
    handleClose();
  };

  const handleDelete = async () => {
    const admin = JSON.parse(localStorage.getItem("adminData")) || {};

    const res = await dataProvider.delete(
      `admin/delete-template/${template.uid}`,
      {},
      admin.access_token
    );

    if (res.data.error) {
      notify(res.data.error.message, { type: "error" });
      return;
    }

    notify(`Template Deleted`, { type: "success" });
    fetchData();
    handleClose();
  };

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Template 1
              </Typography>
              <GrClose
                style={{ fontSize: "1.5rem", cursor: "pointer" }}
                onClick={handleClose}
              />
            </Box>

            <Box mt={4}>
              <Grid container spacing={2}>
                <Grid item lg={4} md={4}>
                  <label style={{ fontWeight: "600", fontSize: "1.2rem" }}>
                    Layout
                  </label>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.2rem",
                    }}
                    my={2}
                  >
                    <LayoutButton
                      title={"top"}
                      style={{
                        width: "100%",
                        backgroundColor: "#cbcbcb",
                        height: "50%",
                      }}
                    />
                    <LayoutButton
                      title={"left"}
                      style={{
                        width: "52%",
                        backgroundColor: "#cbcbcb",
                        height: "100%",
                      }}
                    />
                    <LayoutButton
                      title={"right"}
                      style={{
                        width: "50%",
                        backgroundColor: "#cbcbcb",
                        height: "100%",
                        float: "right",
                      }}
                    />
                  </Box>
                  <label style={{ fontWeight: "600", fontSize: "1.2rem" }}>
                    Columns
                  </label>
                  <ColumnButton />
                </Grid>
                <Grid item lg={7} md={7}>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Box
                      sx={{
                        height: "20rem",
                        width: "14rem",
                        bgcolor: "#c7c7c7",
                      }}
                    ></Box>
                  </Box>
                </Grid>
                <Grid item lg={4} md={4}>
                  <label style={{ fontWeight: "600", fontSize: "1.2rem" }}>
                    Column width
                  </label>
                  <Box display={"flex"} gap={"2rem"}>
                    <ColumnWidth title={"Left"} />
                    <ColumnWidth title={"Right"} />
                  </Box>
                </Grid>
                <Grid item lg={7} md={7}>
                  <Box display="flex" flexDirection={"column"}>
                    <Box alignSelf={"center"}>
                      <label style={{ fontWeight: "600", fontSize: "1.2rem" }}>
                        Font
                      </label>

                      <Box display={"flex"} gap={"2rem"} mt={3}>
                        <FontElement title={"Serif"} />
                        <FontElement title={"Sans"} />
                        <FontElement title={"Mono"} />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={4} md={4}>
                  <label style={{ fontWeight: "600", fontSize: "1.2rem" }}>
                    Colors
                  </label>
                  <Box display={"flex"} gap={"2rem"} mt={2}>
                    <ColorsElement
                      style={{
                        width: "100%",
                        backgroundColor: "#e8e8e8",
                        height: "100%",
                      }}
                      title={"Basic"}
                    />
                    <ColorsElement
                      style={{
                        width: "100%",
                        backgroundColor: "#cbcbcb",
                        height: "50%",
                      }}
                      title={"Advanced"}
                    />
                    <ColorsElement
                      style={{
                        border: "4px solid #cbcbcb",
                      }}
                      title={"Border"}
                    />
                  </Box>
                </Grid>
                <Grid item lg={7} md={7}>
                  <Box display="flex" justifyContent={"flex-end"}>
                    <Box>
                      <label style={{ fontWeight: "600", fontSize: "1.2rem" }}>
                        Heading Style
                      </label>

                      <Box width={"26.3rem"}>
                        <HeadersElement />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6}>
                  <Box>
                    <ColorsComponent />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "4rem",
                gap: "2rem",
              }}
            >
              <CommonButton value={"Save"} cb={handleSave} />
              <CommonButton value={"Delete"} cb={handleDelete} />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditTemplate;
