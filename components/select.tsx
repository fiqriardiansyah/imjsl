import { getBrand } from "@/service";
import { AiFillCaretDown } from "react-icons/ai";
import { useQuery } from "react-query";
import Select, { DropdownIndicatorProps, components } from "react-select";

interface Props extends React.ComponentProps<Select> {}

export default function SelectBrand({ ...props }: Props) {
    const brandQuery = useQuery(["get-brand"], getBrand);

    const DropdownIndicator = (props: DropdownIndicatorProps<any, true>) => {
        return (
            <components.DropdownIndicator {...props}>
                <AiFillCaretDown className="text-white" />
            </components.DropdownIndicator>
        );
    };

    const tOptions = brandQuery.data?.data?.map((el) => ({ label: el.brand_name, value: el.brand_id }));

    return (
        <Select
            isLoading={brandQuery.isLoading}
            components={{ DropdownIndicator }}
            options={tOptions || []}
            placeholder="Pilih Brand Mobil"
            classNamePrefix="select-car"
            className="shadow-xl w-full"
            {...props}
        />
    );
}
