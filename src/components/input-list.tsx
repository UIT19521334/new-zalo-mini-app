import React from "react";
import { Page, Box, Text, Input, Select, DatePicker, Button, useNavigate } from "zmp-ui";
const { Option, OtpGroup } = Select;

export default function InputList(props) {
    const inputPasswordRef = React.useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    return (
        <Page>
            <div className="section-container">
                <div className="section-body">
                    <div className="row">
                        <Input
                            type="text"
                            label="Label"
                            helperText="Helper text"
                            placeholder="Placeholder"
                        />
                    </div>

                    <div className="row">
                        <Input
                            type="text"
                            label="Label"
                            helperText="Helper text"
                            placeholder="Placeholder"
                            defaultValue="Filled"
                        />
                    </div>

                    <div className="row">
                        <Input
                            type="text"
                            label="Label"
                            helperText="Helper text"
                            placeholder="Placeholder"
                            clearable={{
                                mode: "always",
                            }}
                            defaultValue="Filled"
                        />
                    </div>

                    <div className="row">
                        <Input
                            type="text"
                            label="Label"
                            helperText="Helper text"
                            placeholder="Placeholder"
                            status="success"
                            defaultValue="Filled"
                        />
                    </div>

                    <div className="row">
                        <Input
                            type="text"
                            label="Label"
                            helperText="Helper text"
                            placeholder="Placeholder"
                            status="error"
                            errorText="Error text"
                            defaultValue="Filled"
                        />
                    </div>

                    <div className="row">
                        <Input
                            type="text"
                            label="Label"
                            helperText="Helper text"
                            placeholder="Placeholder"
                            status="success"
                            defaultValue="Filled"
                        />
                    </div>

                    <div className="row">
                        <Input
                            type="text"
                            label="Label"
                            helperText="Helper text"
                            placeholder="Placeholder"
                            clearable
                            status="success"
                            disabled
                            value="Filled"
                        />
                    </div>
                </div>
            </div>
            <div className="section-container">
                <Text.Title size="small">Text Field</Text.Title>
                <Box mt={2}>
                    <Text size="xSmall" className="input-desc">
                        Để nhập nội dung đơn giản trong 1 dòng
                    </Text>
                </Box>
                <Box mt={6}>
                    <Input
                        type="text"
                        label="Label"
                        helperText="Helper text"
                        placeholder="Placeholder"
                        defaultValue="Filled"
                    />
                </Box>
                <Box mt={6}>
                    <Input type="text" placeholder="Placeholder" />
                </Box>
            </div>

            <div className="section-container">
                <Text.Title size="small">Password Field</Text.Title>
                <Box mt={2}>
                    <Text size="xSmall" className="input-desc">
                        Để nhập mật khẩu
                    </Text>
                </Box>
                <Box mt={6}>
                    <Input.Password
                        label="Label"
                        helperText="Helper text"
                        placeholder="Placeholder"
                        defaultValue="Filled"
                        clearable
                    />
                </Box>
                <Box mt={6}>
                    <Input.Password placeholder="Placeholder" />
                </Box>
            </div>
            <div className="section-container">
                <Text.Title size="small">Select Field</Text.Title>
                <Box mt={2}>
                    <Text size="xSmall" className="input-desc">
                        Để chọn trong các nội dung có sẵn.
                    </Text>
                </Box>
                <Box mt={2}>
                    <Text size="xSmall" className="input-desc input-interaction">
                        Interaction
                    </Text>
                </Box>
                <Box mt={2}>
                    <Text size="xSmall" className="input-desc">
                        Bấm chỗ nào cũng trigger chung 1 action, ko cho nhập text
                    </Text>
                </Box>
                <Box mt={6}>
                    <Select
                        label="Label"
                        helperText="Helper text"
                        placeholder="Placeholder"
                        //clearable
                        defaultValue="1"
                    >
                        <OtpGroup label="Group 1">
                            <Option value="1" title="Text" />
                            <Option value="2" title="Text" />
                        </OtpGroup>
                        <OtpGroup label="Group 2">
                            <Option value="3" title="Text" />
                            <Option value="4" title="Text" />
                            <Option value="5" title="Text" disabled />
                            <Option value="6" title="Text" />
                        </OtpGroup>
                    </Select>
                </Box>
                <Box mt={6}>
                    <Select
                        placeholder="Placeholder"
                        // clearable
                        multiple
                        defaultValue={["1"]}
                    >
                        <Option value="1" title="Text" />
                        <Option value="2" title="Text" />
                        <Option value="3" title="Text" />
                        <Option value="4" title="Text" />
                    </Select>
                </Box>
            </div>

            <div className="section-container">
                <Text.Title size="small">Search Field</Text.Title>
                <Box mt={2}>
                    <Text size="xSmall" className="input-desc">
                        Để nhập nội dung tìm kiếm trong 1 dòng
                    </Text>
                </Box>
                <Box mt={6}>
                    <Input.Search
                        label="Label"
                        helperText="Helper text"
                        placeholder="Placeholder"
                        defaultValue="Filled"
                        clearable
                        onSearch={(value) => {
                            console.log(value);
                        }}
                    />
                </Box>

                <Box mt={6}>
                    <Input.Search
                        placeholder="Placeholder"
                        size="small"
                        onSearch={(value) => {
                            console.log(value);
                        }}
                    />
                </Box>
            </div>
            <div className="section-container">
                <Text.Title size="small">DatePicker Field</Text.Title>
                <Box mt={2}>
                    <Text size="xSmall" className="input-desc">
                        Để chọn nội dung ngày/tháng/năm{" "}
                    </Text>
                    <Text size="xSmall" className="input-desc">
                        Bấm chỗ nào cũng trigger chung 1 action, ko cho nhập text
                    </Text>
                </Box>
                <Box mt={6}>
                    <DatePicker
                        label="Label"
                        helperText="Helper text"
                        placeholder="Placeholder"
                        mask
                        maskClosable
                        dateFormat="dd/mm/yyyy"
                        title="Test picker"
                    />
                </Box>
                <Box mt={6}>
                    <DatePicker
                        placeholder="Placeholder"
                        mask
                        maskClosable
                        dateFormat="dd/mm/yyyy"
                        title="Test picker"
                    />
                </Box>
            </div>
            <div className="section-container">
                <Text.Title size="small">OTP Field</Text.Title>
                <Box mt={2}>
                    <Text size="xSmall" className="input-desc">
                        Để nhập OTP. Highlight từng số do string ngắn và mỗi character thì
                        quan trọng
                    </Text>
                    <Text size="xSmall" className="input-desc">
                        Interactionhttps://stc-zmp.zadn.vn/zmp-zaui/images/321fb45f18f6c4a89de78.jpg
                    </Text>
                    <ul className="input-list-desc">
                        <li>
                            <Text size="xSmall" className="input-desc">
                                Bấm xoá: nghĩa là user muốn xoá kí tự được nhập gần nhất
                            </Text>
                        </li>
                        <li>
                            <Text size="xSmall" className="input-desc">
                                Nếu ô đó đã filled, thì chuyển về empty
                            </Text>
                        </li>
                        <li>
                            <Text size="xSmall" className="input-desc">
                                Nếu ô đó empty thì xoá ô trước
                            </Text>
                        </li>
                        <li>
                            <Text size="xSmall" className="input-desc">
                                Không cho chọn từng ô riêng biệt
                            </Text>
                        </li>
                        <li>
                            <Text size="xSmall" className="input-desc">
                                {" "}
                                Nếu tất cả ô đều empty thì khi user activate field, focus vào ô empty
                                đầu tiên
                            </Text>
                        </li>
                        <li>
                            <Text size="xSmall" className="input-desc">
                                {" "}
                                Nếu đã có ít nhất 1 ô đã filled thì khi user activate field, focus
                                vào ô filled cuối cùng
                            </Text>
                        </li>
                    </ul>
                </Box>
                <Box mt={6}>
                    <Input.OTP ref={inputPasswordRef} value="9999" defaultValue="9999" />
                </Box>
                <Box mt={2}>
                    <Button
                        variant="secondary"
                        size="small"
                        onClick={() => inputPasswordRef?.current?.focus()}
                    >
                        Focus
                    </Button>
                </Box>
                <Box mt={6}>
                    <Input.OTP value="9999" defaultValue="9999" />
                </Box>
                <Box mt={6}>
                    <Input.OTP show={true} defaultValue="123456" value="123456" />
                </Box>
                <Box mt={6}>
                    <Input.OTP value="9999" defaultValue="9999" show={false} />
                </Box>
            </div>
            <div className="section-container">
                <Text.Title size="small">TextArea Field</Text.Title>
                <Box mt={2}>
                    <Text size="xSmall" className="input-desc">
                        Để nhập nội dung nhiều
                    </Text>
                </Box>
                <Box mt={6}>
                    <Input.TextArea
                        label="Label"
                        helperText="Helper text"
                        placeholder="Placeholder"
                        defaultValue="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                        clearable
                        showCount
                    />
                </Box>
                <Box mt={6}>
                    <Input.TextArea
                        className="custom-class"
                        placeholder="Placeholder"
                        maxLength={100}
                        showCount={false}
                    />
                </Box>
            </div>

            <div className="section-container">
                <Text.Title size='small'>Date Picker</Text.Title>
                <Box mt={2}>
                    <Text size='xSmall' className='input-desc'>
                        Để chọn nội dung ngày/tháng/năm
                    </Text>
                    <Text size='xSmall' className='input-desc'>
                        Bấm chỗ nào cũng trigger chung 1 action, ko cho nhập text
                    </Text>
                </Box>
                <Box mt={6}>
                    <DatePicker
                        label='Label'
                        helperText='Helper text'
                        mask
                        maskClosable
                        dateFormat='dd/mm/yyyy'
                        title='DatePicker'
                    />
                </Box>
                <Box mt={6}>
                    <DatePicker
                        mask
                        maskClosable
                        dateFormat='dd/mm/yyyy'
                        title='DatePicker'
                    />
                </Box>
                <Box mt={6}>
                    <DatePicker
                        mask
                        maskClosable
                        locale='en'
                        label='DatePicker With Locale'
                        dateFormat='dd/mm/yyyy'
                        title='Test picker'
                    />
                </Box>
                <div className="h-[20px]"></div>
                <Button
                    onClick={() => {
                        navigate(-1);
                    }}
                    variant="primary"
                    fullWidth

                >
                    Go back
                </Button>
                <div className="h-[80px]"></div>
            </div>

        </Page>
    );
}
