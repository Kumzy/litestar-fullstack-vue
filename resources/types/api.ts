export namespace API {
    export namespace AccountLogin {
        export namespace Http201 {
            export type ResponseBody = {
                access_token: string;
                expires_in ? : null | number;
                refresh_token ? : null | string;
                token_type: string;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export type RequestBody = {
            password: string;
            username: string;
        };
    };

    export namespace AccountLogout {
        export namespace Http201 {
            export type ResponseBody = {

            };
        };
    };

    export namespace AccountProfile {
        export namespace Http200 {
            export type ResponseBody = {
                email: string;
                id: string;
                is_active ? : boolean;
                is_superuser ? : boolean;
                is_verified ? : boolean;
                name ? : null | string;
                oauth_accounts ? : {
                    access_token: string;
                    account_email: string;
                    account_id: string;
                    expires_at ? : null | number;
                    id: string;
                    oauth_name: string;
                    refresh_token ? : null | string;
                } [];
                roles ? : {
                    assigned_at: string;
                    role_id: string;
                    role_name: string;
                    role_slug: string;
                } [];
            };
        };
    };

    export namespace AccountRegister {
        export namespace Http201 {
            export type ResponseBody = {
                email: string;
                id: string;
                is_active ? : boolean;
                is_superuser ? : boolean;
                is_verified ? : boolean;
                name ? : null | string;
                oauth_accounts ? : {
                    access_token: string;
                    account_email: string;
                    account_id: string;
                    expires_at ? : null | number;
                    id: string;
                    oauth_name: string;
                    refresh_token ? : null | string;
                } [];
                roles ? : {
                    assigned_at: string;
                    role_id: string;
                    role_name: string;
                    role_slug: string;
                } [];
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export type RequestBody = {
            email: string;
            name ? : null | string;
            password: string;
        };
    };

    export namespace AssignUserRole {
        export namespace Http201 {
            export type ResponseBody = {
                message: string;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            role_slug: string;
        };

        export type RequestBody = {
            user_name: string;
        };
    };

    export namespace AuthenticateMagicLink {
        export namespace Http201 {
            export type ResponseBody = {
                access_token: string;
                expires_in ? : null | number;
                refresh_token ? : null | string;
                token_type: string;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export type RequestBody = {
            token: string;
        };
    };

    export namespace CreateAddon {
        export namespace Http201 {
            export type ResponseBody = {
                description ? : null | string;
                id: string;
                name: string;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export type RequestBody = {
            description ? : null | string;
            name: string;
        };
    };

    export namespace CreateCategory {
        export namespace Http201 {
            export type ResponseBody = {
                id: string;
                name: string;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export type RequestBody = {
            name: string;
        };
    };

    export namespace CreateCustomer {
        export namespace Http201 {
            export type ResponseBody = {
                category ? : null | {
                    id: string;
                    name: string;
                };
                customer_type ? : null | {
                    description ? : null | string;
                    id: string;
                    name: string;
                };
                email: string;
                id: string;
                is_active ? : boolean;
                name: string;
                website ? : null | string;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export type RequestBody = {
            email: string;
            is_active: boolean;
            name: string;
        };
    };

    export namespace CreateCustomerType {
        export namespace Http201 {
            export type ResponseBody = {
                description ? : null | string;
                id: string;
                name: string;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export type RequestBody = {
            description ? : null | string;
            id: string;
            name: string;
        };
    };

    export namespace CreateLicense {
        export namespace Http201 {
            export type ResponseBody = {
                algorithm ? : null | string;
                customer ? : null | {
                    category ? : null | {
                        id: string;
                        name: string;
                    };
                    customer_type ? : null | {
                        description ? : null | string;
                        id: string;
                        name: string;
                    };
                    email: string;
                    id: string;
                    is_active ? : boolean;
                    name: string;
                    website ? : null | string;
                };
                decrypt_key ? : null | string;
                expires_at ? : null | string;
                free_user_count ? : null | number;
                id: string;
                is_trial ? : boolean;
                maximum_user_count ? : null | number;
                nonce ? : null | string;
                private_key ? : null | string;
                private_key_enc ? : null | string;
                public_key ? : null | string;
                signature ? : null | string;
                starts_at ? : null | string;
                status ? : "active" | "expired" | "expiringSoon" | null;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            customer_id: string;
        };

        export type RequestBody = {
            addons ? : string[];
            customer_name: string;
            expires_at: string;
            is_trial ? : boolean;
            maximum_user_count: number;
            starts_at: string;
        };
    };

    export namespace CreateSubscriptionData {
        export namespace Http201 {
            export type ResponseBody = {
                billable_users_count: number;
                date: string;
                encrypted_license: string;
                free_users_count: number;
                hostname: string;
                id: string;
                laby_version: string;
                license ? : null | {
                    algorithm ? : null | string;
                    customer ? : null | {
                        category ? : null | {
                            id: string;
                            name: string;
                        };
                        customer_type ? : null | {
                            description ? : null | string;
                            id: string;
                            name: string;
                        };
                        email: string;
                        id: string;
                        is_active ? : boolean;
                        name: string;
                        website ? : null | string;
                    };
                    decrypt_key ? : null | string;
                    expires_at ? : null | string;
                    free_user_count ? : null | number;
                    id: string;
                    is_trial ? : boolean;
                    maximum_user_count ? : null | number;
                    nonce ? : null | string;
                    private_key ? : null | string;
                    private_key_enc ? : null | string;
                    public_key ? : null | string;
                    signature ? : null | string;
                    starts_at ? : null | string;
                    status ? : "active" | "expired" | "expiringSoon" | null;
                };
                timestamp: string;
                users_count: number;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export type RequestBody = {
            billable_users_count: number;
            date: string;
            encrypted_license: string;
            free_users_count: number;
            hostname: string;
            laby_version: string;
            license ? : null | {
                algorithm ? : null | string;
                customer ? : null | {
                    category ? : null | {
                        id: string;
                        name: string;
                    };
                    customer_type ? : null | {
                        description ? : null | string;
                        id: string;
                        name: string;
                    };
                    email: string;
                    id: string;
                    is_active ? : boolean;
                    name: string;
                    website ? : null | string;
                };
                decrypt_key ? : null | string;
                expires_at ? : null | string;
                free_user_count ? : null | number;
                id: string;
                is_trial ? : boolean;
                maximum_user_count ? : null | number;
                nonce ? : null | string;
                private_key ? : null | string;
                private_key_enc ? : null | string;
                public_key ? : null | string;
                signature ? : null | string;
                starts_at ? : null | string;
                status ? : "active" | "expired" | "expiringSoon" | null;
            };
            timestamp: string;
            users_count: number;
        };
    };

    export namespace CreateUser {
        export namespace Http201 {
            export type ResponseBody = {
                email: string;
                id: string;
                is_active ? : boolean;
                is_superuser ? : boolean;
                is_verified ? : boolean;
                name ? : null | string;
                oauth_accounts ? : {
                    access_token: string;
                    account_email: string;
                    account_id: string;
                    expires_at ? : null | number;
                    id: string;
                    oauth_name: string;
                    refresh_token ? : null | string;
                } [];
                roles ? : {
                    assigned_at: string;
                    role_id: string;
                    role_name: string;
                    role_slug: string;
                } [];
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export type RequestBody = {
            email: string;
            is_active ? : boolean;
            is_superuser ? : boolean;
            is_verified ? : boolean;
            name ? : null | string;
            password: string;
        };
    };

    export namespace CustomersStat {
        export namespace Http200 {
            export type ResponseBody = {
                customers_active_license_count: number;
                customers_count: number;
                customers_expired_license_count: number;
                customers_license_expiring_soon_count: number;
                customers_no_license_count: number;
            };
        };
    };

    export namespace DeleteAddon {
        export namespace Http204 {
            export type ResponseBody = undefined;
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            addon_id: string;
        };
    };

    export namespace DeleteCategory {
        export namespace Http204 {
            export type ResponseBody = undefined;
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            category_id: string;
        };
    };

    export namespace DeleteCustomer {
        export namespace Http204 {
            export type ResponseBody = undefined;
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            customer_id: string;
        };
    };

    export namespace DeleteCustomerType {
        export namespace Http204 {
            export type ResponseBody = undefined;
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            customer_type_id: string;
        };
    };

    export namespace DeleteLicense {
        export namespace Http204 {
            export type ResponseBody = undefined;
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            customer_id: string;
            license_id: string;
        };
    };

    export namespace DeleteUser {
        export namespace Http204 {
            export type ResponseBody = undefined;
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            user_id: string;
        };
    };

    export namespace GetAddon {
        export namespace Http200 {
            export type ResponseBody = {
                description ? : null | string;
                id: string;
                name: string;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            addon_id: string;
        };
    };

    export namespace GetCategory {
        export namespace Http200 {
            export type ResponseBody = {
                id: string;
                name: string;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            category_id: string;
        };
    };

    export namespace GetCustomer {
        export namespace Http200 {
            export type ResponseBody = {
                category ? : null | {
                    id: string;
                    name: string;
                };
                customer_type ? : null | {
                    description ? : null | string;
                    id: string;
                    name: string;
                };
                email: string;
                id: string;
                is_active ? : boolean;
                name: string;
                website ? : null | string;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            customer_id: string;
        };
    };

    export namespace GetCustomerType {
        export namespace Http200 {
            export type ResponseBody = {
                description ? : null | string;
                id: string;
                name: string;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            customer_type_id: string;
        };
    };

    export namespace GetLicense {
        export namespace Http200 {
            export type ResponseBody = {
                algorithm ? : null | string;
                customer ? : null | {
                    category ? : null | {
                        id: string;
                        name: string;
                    };
                    customer_type ? : null | {
                        description ? : null | string;
                        id: string;
                        name: string;
                    };
                    email: string;
                    id: string;
                    is_active ? : boolean;
                    name: string;
                    website ? : null | string;
                };
                decrypt_key ? : null | string;
                expires_at ? : null | string;
                free_user_count ? : null | number;
                id: string;
                is_trial ? : boolean;
                maximum_user_count ? : null | number;
                nonce ? : null | string;
                private_key ? : null | string;
                private_key_enc ? : null | string;
                public_key ? : null | string;
                signature ? : null | string;
                starts_at ? : null | string;
                status ? : "active" | "expired" | "expiringSoon" | null;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            customer_id: string;
            license_id: string;
        };
    };

    export namespace GetLicenseFile {
        export namespace Http200 {
            export type ResponseBody = string;

            export interface ResponseHeaders {
                "content-length" ? : string;
                "last-modified" ? : string;
                etag ? : string;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            customer_id: string;
            license_id: string;
        };
    };

    export namespace GetSubscriptionData {
        export namespace Http200 {
            export type ResponseBody = {
                billable_users_count: number;
                date: string;
                encrypted_license: string;
                free_users_count: number;
                hostname: string;
                id: string;
                laby_version: string;
                license ? : null | {
                    algorithm ? : null | string;
                    customer ? : null | {
                        category ? : null | {
                            id: string;
                            name: string;
                        };
                        customer_type ? : null | {
                            description ? : null | string;
                            id: string;
                            name: string;
                        };
                        email: string;
                        id: string;
                        is_active ? : boolean;
                        name: string;
                        website ? : null | string;
                    };
                    decrypt_key ? : null | string;
                    expires_at ? : null | string;
                    free_user_count ? : null | number;
                    id: string;
                    is_trial ? : boolean;
                    maximum_user_count ? : null | number;
                    nonce ? : null | string;
                    private_key ? : null | string;
                    private_key_enc ? : null | string;
                    public_key ? : null | string;
                    signature ? : null | string;
                    starts_at ? : null | string;
                    status ? : "active" | "expired" | "expiringSoon" | null;
                };
                timestamp: string;
                users_count: number;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            customer_id: string;
            license_id: string;
            subscription_data_id: string;
        };
    };

    export namespace GetUser {
        export namespace Http200 {
            export type ResponseBody = {
                email: string;
                id: string;
                is_active ? : boolean;
                is_superuser ? : boolean;
                is_verified ? : boolean;
                name ? : null | string;
                oauth_accounts ? : {
                    access_token: string;
                    account_email: string;
                    account_id: string;
                    expires_at ? : null | number;
                    id: string;
                    oauth_name: string;
                    refresh_token ? : null | string;
                } [];
                roles ? : {
                    assigned_at: string;
                    role_id: string;
                    role_name: string;
                    role_slug: string;
                } [];
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            user_id: string;
        };
    };

    export namespace HomeCustomersStat {
        export namespace Http200 {
            export type ResponseBody = {
                customers_active_license_count: number;
                customers_expired_license_count: number;
                customers_license_expiring_soon: number;
            };
        };
    };

    export namespace LicenseLogin {
        export namespace Http201 {
            export type ResponseBody = {
                access_token: string;
                expires_in ? : null | number;
                refresh_token ? : null | string;
                token_type: string;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export type RequestBody = {
            encrypted_key: string;
            id: string;
        };
    };

    export namespace ListAddons {
        export namespace Http200 {
            export type ResponseBody = {
                items: {
                    description ? : null | string;
                    id: string;
                    name: string;
                } [];
                limit: number;
                offset: number;
                total: number;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface QueryParameters {
            createdAfter ? : null | string;
            createdBefore ? : null | string;
            currentPage ? : number;
            ids ? : null | string[];
            orderBy ? : null | string;
            pageSize ? : number;
            searchField ? : null | string;
            searchIgnoreCase ? : boolean | null;
            searchString ? : null | string;
            sortOrder ? : "asc" | "desc" | null;
            updatedAfter ? : null | string;
            updatedBefore ? : null | string;
        };
    };

    export namespace ListCategories {
        export namespace Http200 {
            export type ResponseBody = {
                items: {
                    id: string;
                    name: string;
                } [];
                limit: number;
                offset: number;
                total: number;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface QueryParameters {
            createdAfter ? : null | string;
            createdBefore ? : null | string;
            currentPage ? : number;
            ids ? : null | string[];
            orderBy ? : null | string;
            pageSize ? : number;
            searchField ? : null | string;
            searchIgnoreCase ? : boolean | null;
            searchString ? : null | string;
            sortOrder ? : "asc" | "desc" | null;
            updatedAfter ? : null | string;
            updatedBefore ? : null | string;
        };
    };

    export namespace ListCustomer {
        export namespace Http200 {
            export type ResponseBody = {
                items: {
                    category ? : null | {
                        id: string;
                        name: string;
                    };
                    customer_type ? : null | {
                        description ? : null | string;
                        id: string;
                        name: string;
                    };
                    email: string;
                    id: string;
                    is_active ? : boolean;
                    name: string;
                    website ? : null | string;
                } [];
                limit: number;
                offset: number;
                total: number;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface QueryParameters {
            createdAfter ? : null | string;
            createdBefore ? : null | string;
            currentPage ? : number;
            ids ? : null | string[];
            orderBy ? : null | string;
            pageSize ? : number;
            searchField ? : null | string;
            searchIgnoreCase ? : boolean | null;
            searchString ? : null | string;
            sortOrder ? : "asc" | "desc" | null;
            updatedAfter ? : null | string;
            updatedBefore ? : null | string;
        };
    };

    export namespace ListCustomerTypes {
        export namespace Http200 {
            export type ResponseBody = {
                items: {
                    description ? : null | string;
                    id: string;
                    name: string;
                } [];
                limit: number;
                offset: number;
                total: number;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface QueryParameters {
            createdAfter ? : null | string;
            createdBefore ? : null | string;
            currentPage ? : number;
            ids ? : null | string[];
            orderBy ? : null | string;
            pageSize ? : number;
            searchField ? : null | string;
            searchIgnoreCase ? : boolean | null;
            searchString ? : null | string;
            sortOrder ? : "asc" | "desc" | null;
            updatedAfter ? : null | string;
            updatedBefore ? : null | string;
        };
    };

    export namespace ListLicenses {
        export namespace Http200 {
            export type ResponseBody = {
                items: {
                    customer ? : null | {
                        category ? : null | {
                            id: string;
                            name: string;
                        };
                        customer_type ? : null | {
                            description ? : null | string;
                            id: string;
                            name: string;
                        };
                        email: string;
                        id: string;
                        is_active ? : boolean;
                        name: string;
                        website ? : null | string;
                    };
                    expires_at ? : null | string;
                    free_user_count ? : null | number;
                    id: string;
                    is_trial ? : boolean;
                    maximum_user_count ? : null | number;
                    starts_at ? : null | string;
                    status ? : "active" | "expired" | "expiringSoon" | null;
                } [];
                limit: number;
                offset: number;
                total: number;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            customer_id: string;
        };

        export interface QueryParameters {
            createdAfter ? : null | string;
            createdBefore ? : null | string;
            currentPage ? : number;
            ids ? : null | string[];
            orderBy ? : null | string;
            pageSize ? : number;
            searchField ? : null | string;
            searchIgnoreCase ? : boolean | null;
            searchString ? : null | string;
            sortOrder ? : "asc" | "desc" | null;
            updatedAfter ? : null | string;
            updatedBefore ? : null | string;
        };
    };

    export namespace ListSubscriptionData {
        export namespace Http200 {
            export type ResponseBody = {
                items: {
                    billable_users_count: number;
                    date: string;
                    encrypted_license: string;
                    free_users_count: number;
                    hostname: string;
                    id: string;
                    laby_version: string;
                    license ? : null | {
                        algorithm ? : null | string;
                        customer ? : null | {
                            category ? : null | {
                                id: string;
                                name: string;
                            };
                            customer_type ? : null | {
                                description ? : null | string;
                                id: string;
                                name: string;
                            };
                            email: string;
                            id: string;
                            is_active ? : boolean;
                            name: string;
                            website ? : null | string;
                        };
                        decrypt_key ? : null | string;
                        expires_at ? : null | string;
                        free_user_count ? : null | number;
                        id: string;
                        is_trial ? : boolean;
                        maximum_user_count ? : null | number;
                        nonce ? : null | string;
                        private_key ? : null | string;
                        private_key_enc ? : null | string;
                        public_key ? : null | string;
                        signature ? : null | string;
                        starts_at ? : null | string;
                        status ? : "active" | "expired" | "expiringSoon" | null;
                    };
                    timestamp: string;
                    users_count: number;
                } [];
                limit: number;
                offset: number;
                total: number;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            customer_id: string;
            license_id: string;
        };

        export interface QueryParameters {
            createdAfter ? : null | string;
            createdBefore ? : null | string;
            currentPage ? : number;
            ids ? : null | string[];
            orderBy ? : null | string;
            pageSize ? : number;
            searchField ? : null | string;
            searchIgnoreCase ? : boolean | null;
            searchString ? : null | string;
            sortOrder ? : "asc" | "desc" | null;
            updatedAfter ? : null | string;
            updatedBefore ? : null | string;
        };
    };

    export namespace ListUsers {
        export namespace Http200 {
            export type ResponseBody = {
                items: {
                    email: string;
                    id: string;
                    is_active ? : boolean;
                    is_superuser ? : boolean;
                    is_verified ? : boolean;
                    name ? : null | string;
                    oauth_accounts ? : {
                        access_token: string;
                        account_email: string;
                        account_id: string;
                        expires_at ? : null | number;
                        id: string;
                        oauth_name: string;
                        refresh_token ? : null | string;
                    } [];
                    roles ? : {
                        assigned_at: string;
                        role_id: string;
                        role_name: string;
                        role_slug: string;
                    } [];
                } [];
                limit: number;
                offset: number;
                total: number;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface QueryParameters {
            createdAfter ? : null | string;
            createdBefore ? : null | string;
            currentPage ? : number;
            ids ? : null | string[];
            orderBy ? : null | string;
            pageSize ? : number;
            searchField ? : null | string;
            searchIgnoreCase ? : boolean | null;
            searchString ? : null | string;
            sortOrder ? : "asc" | "desc" | null;
            updatedAfter ? : null | string;
            updatedBefore ? : null | string;
        };
    };

    export namespace RequestMagicLink {
        export namespace Http202 {
            export type ResponseBody = undefined;
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export type RequestBody = {
            email: string;
        };
    };

    export namespace RevokeUserRole {
        export namespace Http201 {
            export type ResponseBody = {
                message: string;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            role_slug: string;
        };

        export type RequestBody = {
            user_name: string;
        };
    };

    export namespace StatsWeeklyNewUsers {
        export namespace Http200 {
            export type ResponseBody = {
                items: {
                    new_users: number;
                    week: string;
                } [];
                limit: number;
                offset: number;
                total: number;
            };
        };
    };

    export namespace SystemHealth {
        export namespace Http200 {
            export type ResponseBody = {
                app ? : string;
                cache_status: "offline" | "online";
                database_status: "offline" | "online";
                version ? : string;
                worker_status: "offline" | "online";
            };
        };
    };

    export namespace UpdateCategory {
        export namespace Http200 {
            export type ResponseBody = {
                id: string;
                name: string;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            category_id: string;
        };

        export type RequestBody = {
            name: null | string;
        };
    };

    export namespace UpdateCustomer {
        export namespace Http200 {
            export type ResponseBody = {
                category ? : null | {
                    id: string;
                    name: string;
                };
                customer_type ? : null | {
                    description ? : null | string;
                    id: string;
                    name: string;
                };
                email: string;
                id: string;
                is_active ? : boolean;
                name: string;
                website ? : null | string;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            customer_id: string;
        };

        export type RequestBody = {
            email: null | string;
            is_active: boolean | null;
            name: null | string;
            website: null | string;
        };
    };

    export namespace UpdateCustomerType {
        export namespace Http200 {
            export type ResponseBody = {
                description ? : null | string;
                id: string;
                name: string;
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            customer_type_id: string;
        };

        export type RequestBody = {
            description: null | string;
            name: null | string;
        };
    };

    export namespace UpdateUser {
        export namespace Http200 {
            export type ResponseBody = {
                email: string;
                id: string;
                is_active ? : boolean;
                is_superuser ? : boolean;
                is_verified ? : boolean;
                name ? : null | string;
                oauth_accounts ? : {
                    access_token: string;
                    account_email: string;
                    account_id: string;
                    expires_at ? : null | number;
                    id: string;
                    oauth_name: string;
                    refresh_token ? : null | string;
                } [];
                roles ? : {
                    assigned_at: string;
                    role_id: string;
                    role_name: string;
                    role_slug: string;
                } [];
            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            user_id: string;
        };

        export type RequestBody = {
            email: null | string;
            is_active: boolean | null;
            is_superuser: boolean | null;
            is_verified: boolean | null;
            name: null | string;
            password: null | string;
        };
    };

    export namespace WorkerJobAbort {
        export namespace Http202 {
            export type ResponseBody = {

            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            job_id: string;
            queue_id: string;
        };
    };

    export namespace WorkerJobDetail {
        export namespace Http200 {
            export type ResponseBody = {

            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            job_id: string;
            queue_id: string;
        };
    };

    export namespace WorkerJobRetry {
        export namespace Http202 {
            export type ResponseBody = {

            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            job_id: string;
            queue_id: string;
        };
    };

    export namespace WorkerQueueDetail {
        export namespace Http200 {
            export type ResponseBody = {

            };
        };

        export namespace Http400 {
            export type ResponseBody = {
                detail: string;
                extra ? : Record < string,
                unknown > | null | unknown[];
                status_code: number;
            };
        };

        export interface PathParameters {
            queue_id: string;
        };
    };

    export namespace WorkerQueueList {
        export namespace Http200 {
            export type ResponseBody = {

            };
        };
    };
};